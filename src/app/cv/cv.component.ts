import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CvService } from './cv.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ModalService } from '../modal/modal.service';
import { MglTimelineEntryComponent } from 'angular-mgl-timeline/src/timeline/timeline-entry/timeline-entry.component';
import { TagGroup } from './tag-group.model';
import { Entry } from './entry.model';
import { TourService, IStepOption } from 'ngx-tour-md-menu';
import { Tag } from './tag.model';
import { TimelineEntry } from './timeline-entry.model';

@Component({
    selector     : 'cv',
    templateUrl  : './cv.component.html',
    styleUrls    : ['./cv.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CvComponent implements OnInit
{
    @ViewChildren('target') entryComponents: QueryList<MglTimelineEntryComponent> | undefined;
    entriesShown: number = 0;
    totalEntries: number = 0;
    tagGroups: TagGroup[] = [];
    predefinedTagGroups: TagGroup[] = [];
    tagsControl = new FormControl();
    columnsToDisplay = ['Name'];
    expandedElement: Entry | null = null;
    alternate: boolean = false;
    toggle: boolean = true;
    color: boolean = false;
    size: number = 40;
    expandEnabled: boolean = true;
    side = 'right';
    entries : TimelineEntry[] = [];
    selectedTags: Tag[] = [];
    mustHaveAllTags: boolean = false;

    constructor(private cvService: CvService, private modalService: ModalService, public tourService: TourService
    )
    {
        this.tourService.stepShow$.subscribe((step: IStepOption) => {
            if (step.anchorId == 'firstTimelineEntry') {
                this.goToTag('Tax Receipt Organizer');
            }

        });

        this.tourService.initialize([
            {
                anchorId: 'tags',
                content: 'Tags are used to filter entries in the timeline below. They can be languages (C#, TypeScript, SQL), technologies (Angular, WordPress, Amazon SQS), and more',
                title: 'Tags'
            },
            {
                anchorId: 'mustHaveAllTags',
                content: 'By default, the filter will include any entries that have any of the selected tags. When this is checked, only entries that have all of the selected tags will be included',
                title: 'Must have all tags',
            },
            {
                anchorId: 'entryInput',
                content: 'These are the tags that are currently selected',
                title: 'Selected Tags',
            },
            {
                anchorId: 'clearTags',
                content: 'Use this to clear selected tags',
                title: 'Clear Tags',
            },
            {
                anchorId: 'chipList',
                content: 'You can view any entry by clicking on them from here',
                title: 'Click to view any of the following entries',
            },
            {
                anchorId: 'predefinedTagGroups',
                content: 'Curated selections of tags',
                title: 'Predefined Tag Groups',
            },
            {
                anchorId: 'timeline',
                content: 'CV work timeline, containing entries broken down by year. Tag filters apply here',
                title: 'Timeline',
            },
            {
                anchorId: 'firstTimelineEntry',
                content: 'Click on a year to expand and see the entries',
                title: 'Click to expand / collapse',
            },
            {
                anchorId: 'firstTimelineDataEntry',
                content: 'Click on an entry to expand and see the details',
                title: 'Click to expand / collapse',
            },
        ]);
    }

    ngOnInit(): void {
        this.cvService.getPredefinedTagGroups().subscribe(
            data => {
                this.predefinedTagGroups = data;
            },
            error => {
                this.modalService.alertError(error);
            }
        );

        this.cvService.getTagGroups().subscribe(
            data => {
                this.tagGroups = data;
            },
            error => {
                this.modalService.alertError(error);
            }
        );

        this.cvService.getEntries().subscribe(
            data => {
                let min = Math.min.apply(Math, data.map(function (o) { return o.Year; }));
                let max = Math.max.apply(Math, data.map(function (o) { return o.Year; }));

                this.entries = [];
                for (let i = min; i <= max; i++) {
                    let entry = this.createEntry(data, i);

                    this.totalEntries += entry.dataSource.data.length;
                    entry.dataSource.filterPredicate = function (item: { Show: any; }, filter: any) {
                        return item.Show;
                    }

                    this.entries.push(entry);
                }
            },
            error => {
                this.modalService.alertError(error);
            }
        );
    }

    usePredefinedTagGroup(groupName: string): void {
        var group = this.predefinedTagGroups.filter(function (tg) {
            return tg.Name == groupName;
        })[0];

        let tags = group.Tags.map(function (t) {
            return t.Name;
        });

      this.selectedTags = this.getTagGroups(tags);

        this.onChangeName();
    }

  onDotClick($event: MouseEvent): void {

  }

    goToTag(entryName: any) : void {

        let selectedId;
        let el : any;

        for (let i = 0; i < this.entries.length; i++) {
            for (let entry of this.entries[i].dataSource.data) {
                if (entry.Name == entryName) {
                    selectedId = i;
                    el = <HTMLElement><unknown>entry;
                }
            }
        }

        let elementId = "entry_" + selectedId;

      let entryComponents = this.entryComponents == null ? [] : this.entryComponents.toArray();

        for (let entryComponent of entryComponents) {
            let componentElementId = (entryComponent as any).elementRef.nativeElement.id;

            if (componentElementId === elementId) {
                // expand the year
                entryComponent.expand();
            }
        }

        // expand the entry
        this.expandedElement = el;
    }

  checkActiveElement(element: any) {
    if (element == this.expandedElement) {
      return 'font-weight-bold';
    }

    return '';
  }

    selectTag(tag: string) : void {
        this.selectedTags = this.getTagGroups([tag]);
        this.onChangeName();
    }

    getTagGroups(tagNames: string[]) : Tag[] {

      let result: Tag[] | undefined = [];

      for (let tagName of tagNames) {
        let tag: Tag | undefined = this.getTag(tagName);
        if (tag!= undefined) {
          result.push(tag);
        }
      }

      return result;
    }

    getTag(tagName: string) : Tag | undefined {
        for (let tg of this.tagGroups) {
            for (let tag of tg.Tags) {
                if (tag.Name == tagName) {
                    return tag;
                }
            }
      }

      return undefined;
    }

    noEntriesToShow(entry: TimelineEntry) : boolean {
        let result = entry.dataSource.data.filter(function (d) {
            return d.Show;
        });

        return result.length == 0;
    }

    getEntriesShown() : string[] {
        var result = [];

        for (let entry of this.entries) {
            for (let row of entry.dataSource.data) {
                if (row.Show) {
                    result.push(row.Name);
                }
            }
        }

        this.entriesShown = result.length;

        return result;
    }

    onMustHaveAllTagsChanged() : void {
        this.onChangeName();
    }

    clearTags() : void {
      this.selectedTags = [];
        this.onChangeName();
    }

    filterEntries() : any[] {
        return this.entries.filter(function (entry) {
            return entry.Show;
        });
    }

    onExpandEntry($event : boolean, i : number, target: any) : void {
        if ($event == true) {
            let e = (<HTMLElement>target.elementRef.nativeElement);
            e.scrollIntoView(true);
        }
    }

    onHeaderClick($event: MouseEvent, i: number) : void {
        let entry = this.entries[i];
        let count = entry.dataSource.data.filter(function (d) {
            return d.Show;
        }).length;

        if (count == 0) {
            $event.stopPropagation();
        }
    }

    onChangeName() : void {
      let selectedTags = this.selectedTags;

        this.expandedElement = null;

        for (let entry of this.entries) {

            entry.dataSource.filter = "";

            for (let row of entry.dataSource.data) {
                if (selectedTags.length == 0) {
                    row.Show = true;
                    continue;
                }

                // Include only entries that have all selected tags
                if (this.mustHaveAllTags) {
                    let matches = [];
                    for (let selectedTag of selectedTags) {
                        let result = row.Tags.filter(function (t) {
                            return t.Id == selectedTag.Id;
                        });

                        matches.push(result.length > 0);
                    }

                    let res = matches.filter(function (m) { return !m; });

                    row.Show = res.length == 0;
                }
                else {
                // Include only entries that have any of the selected tags
                    row.Show = false;

                    for (let selectedTag of selectedTags) {
                        let result = row.Tags.filter(function (t) {
                            return t.Id == selectedTag.Id;
                        });

                        row.Show = result.length > 0;
                        if (row.Show) {
                            break;
                        }
                    }
                }
            }
        }

        for (let entry of this.entries) {
            entry.dataSource.filter = "trigger";
        }
    }

    renderTags(tags: Tag[]) : string {
        return tags.map(function (t) {
            return t.Name
        }).join(', ');
    }

    getSubtitle(dataSource: MatTableDataSource<Entry>) : string {
        var result: any[] = [];

        let tags = dataSource.data.map(r => r.Tags);

        for (let arrayOfTags of tags) {
            result = result.concat(arrayOfTags);
        }

        result = result.filter(function (item, position) { return result.indexOf(item) == position; });

        return 'tags: ' + result.join(', ');
    }

    getHeader(dataSource: MatTableDataSource<Entry>) : string {
        var count = dataSource.data.filter(function (d) {
            return d.Show;
        }).length;
       
        if (count == 0) {
            return 'none';
        }

        return count + ' ' + (count == 1 ? 'entry' : 'entries');
    }

  createEntry(data: Entry[], year: number): TimelineEntry {
    for (let d of data) {
      d.Show = true;
    }

    return {
      getHeader: this.getHeader,
      get header() {
        return this.getHeader(this.dataSource);
      },
      getSubtitle: this.getSubtitle,
      get subtitle() {
        return this.getSubtitle(this.dataSource);
      },
      date: year,
      parentNode: year == 2011,
      expanded: true,
      Show: true,
      dataSource: new MatTableDataSource<Entry>(data.filter(function (d) { return d.Year == year; }))
    }
  }
}

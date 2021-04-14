import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagGroup } from './tag-group.model';
import { Entry } from './entry.model';

@Injectable()
export class CvService 
{
    constructor(
    )
    {
    }

    getPredefinedTagGroups(): Observable<TagGroup[]> {
      return new Observable((o) => {

        let result: TagGroup[] = require('./cv-predefined-tag-groups.data.json');

        o.next(result);

        o.complete();

        return { unsubscribe() { } };

      });
    }

  getTagGroups(): Observable<TagGroup[]> {
    return new Observable((o) => {

      let result: TagGroup[] = require('./cv-tag-groups.data.json');

        o.next(result);

        o.complete();

        return { unsubscribe() { } };

    });
  }

  getEntries(): Observable<Entry[]> {
    return new Observable((o) => {

      let result: Entry[] = require('./cv-entries.data.json');

      o.next(result);

      o.complete();

      return { unsubscribe() { } };

    });
  }
}

import { MatTableDataSource } from '@angular/material/table';
import { Entry } from './entry.model';

export interface TimelineEntry {

  getHeader(dataSource: MatTableDataSource<Entry>): string;
  getSubtitle(dataSource: MatTableDataSource<Entry>): string;
  date: number;
  parentNode: boolean;
  expanded: boolean;
  Show: boolean;
  header: any;
  subtitle: any;
  dataSource: MatTableDataSource<Entry>;
}

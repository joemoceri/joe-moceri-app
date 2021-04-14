import { Tag } from './tag.model';

export interface Entry {
  Id: number;
    Name: string;
    Description: string;
    Tags: Tag[];
    Year: number;
    Show: boolean;
}

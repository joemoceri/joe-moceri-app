import { Tag } from './tag.model';

export interface Entry {
    Name: string;
    Description: string;
    Tags: Tag[];
    Year: number;
    Show: boolean;
}
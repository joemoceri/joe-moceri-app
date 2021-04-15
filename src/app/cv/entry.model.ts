import { Tag } from './tag.model';

export interface Entry {
  Id: number;
  Name: string;
  Description: string;
  Tags: Tag[];
  Year: number;
  Show: boolean;
  OpenProcessingUrl: string;
  GitHubUrl: string;
  NPMUrl: string;
  BehanceUrl: string;
  NuGetUrl: string;
  LinkedInUrl: string;
  MediumUrl: string;
  WebsiteUrl: string;
}

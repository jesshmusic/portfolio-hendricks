import { ImageAsset } from 'sanity';
import { PortableTextBlock } from '@portabletext/types';

export interface Project {
  _id: string;
  title: string;
  subtitle: string;
  description?: PortableTextBlock[];
  link?: string;
  gitHubRepo?: string;
  techStack: string[];
  thumbnail?: {
    asset: ImageAsset;
  };
}

export interface Project {
  _id: string;
  title: string;
  subtitle: string;
  description?: any;
  link?: string;
  gitHubRepo?: string;
  techStack: string[];
  thumbnail?: any;
}

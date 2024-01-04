/// <reference types="vite/client" />

interface ProjectType {
  key: integer;
  image?: string;
  name: string;
  description: string;
  tools: string[];
  links?: ProjectLinkType[];
}

interface ProjectLinkType {
  type: "github" | "project";
  link: string;
}

interface CourseType {
  key: integer;
  name: string;
  institution: string;
  duration: string;
}

interface WorkExperienceType {
  key: integer;
  image?: string;
  institution: string;
  title: string;
  description: string;
  duration: string;
  activities: string[];
}

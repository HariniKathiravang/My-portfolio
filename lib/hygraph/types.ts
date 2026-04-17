export type SocialLink = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  shortIntro: string;
  bio: string;
  profilePhoto?: {
    url: string;
  } | null;
  socialLinks: SocialLink[];
};

export type Skill = {
  id: string;
  name: string;
  category?: string | null;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  image?: {
    url: string;
  } | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured?: boolean | null;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string | null;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  current?: boolean | null;
  description: string;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field?: string | null;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
};

export type HomePageData = {
  profile: Profile | null;
  featuredProjects: Project[];
  skills: Skill[];
};

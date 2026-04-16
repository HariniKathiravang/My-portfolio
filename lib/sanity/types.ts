export type SanityImage = {
  asset?: {
    _ref: string;
    _type: "reference";
  };
};

export type SocialLink = {
  label: string;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  shortIntro: string;
  bio: unknown[];
  socialLinks: SocialLink[];
};

export type Skill = {
  id: string;
  name: string;
  category?: string;
};

export type Project = {
  id: string;
  title: string;
  slug: { current: string };
  description: string;
  techStack: string[];
  image: SanityImage;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

export type HomePageData = {
  profile: Profile | null;
  featuredProjects: Project[];
  skills: Skill[];
};

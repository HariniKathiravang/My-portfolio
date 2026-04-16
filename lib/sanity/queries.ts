import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  name,
  role,
  shortIntro,
  bio,
  socialLinks[]{
    label,
    url
  }
}`;

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(_createdAt desc){
  "id": _id,
  title,
  slug,
  description,
  techStack,
  image,
  githubUrl,
  liveUrl,
  featured
}`;

export const allProjectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  "id": _id,
  title,
  slug,
  description,
  techStack,
  image,
  githubUrl,
  liveUrl,
  featured
}`;

export const skillsQuery = groq`*[_type == "skill"] | order(category asc, name asc){
  "id": _id,
  name,
  category
}`;

export const certificationsQuery = groq`*[_type == "certification"] | order(issueDate desc){
  "id": _id,
  title,
  issuer,
  issueDate,
  credentialUrl
}`;

export const experienceQuery = groq`*[_type == "experience"] | order(startDate desc){
  "id": _id,
  company,
  role,
  startDate,
  endDate,
  current,
  description
}`;

export const educationQuery = groq`*[_type == "education"] | order(startDate desc){
  "id": _id,
  institution,
  degree,
  field,
  startDate,
  endDate,
  description
}`;

export const homePageQuery = groq`{
  "profile": *[_type == "profile"][0]{
    name,
    role,
    shortIntro,
    bio,
    socialLinks[]{
      label,
      url
    }
  },
  "featuredProjects": *[_type == "project" && featured == true] | order(_createdAt desc)[0...3]{
    "id": _id,
    title,
    slug,
    description,
    techStack,
    image,
    githubUrl,
    liveUrl,
    featured
  },
  "skills": *[_type == "skill"] | order(category asc, name asc)[0...8]{
    "id": _id,
    name,
    category
  }
}`;

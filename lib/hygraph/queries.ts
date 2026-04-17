import { gql } from "graphql-request";

const profileFields = gql`
  fragment ProfileFields on Profile {
    name
    role
    shortIntro
    bio
    profilePhoto {
      url
    }
    socialLinks {
      label
      url
    }
  }
`;

const projectFields = gql`
  fragment ProjectFields on Project {
    id
    title
    slug
    description
    techStack
    image {
      url
    }
    githubUrl
    liveUrl
    featured
  }
`;

export const homePageQuery = gql`
  ${profileFields}
  ${projectFields}
  query HomePageQuery {
    profiles(first: 1) {
      ...ProfileFields
    }
    projects(where: { featured: true }, orderBy: createdAt_DESC, first: 3) {
      ...ProjectFields
    }
    skills(orderBy: name_ASC, first: 8) {
      id
      name
      category
    }
  }
`;

export const profileQuery = gql`
  ${profileFields}
  query ProfileQuery {
    profiles(first: 1) {
      ...ProfileFields
    }
  }
`;

export const allProjectsQuery = gql`
  ${projectFields}
  query AllProjectsQuery {
    projects(orderBy: createdAt_DESC) {
      ...ProjectFields
    }
  }
`;

export const certificationsQuery = gql`
  query CertificationsQuery {
    certifications(orderBy: issueDate_DESC) {
      id
      title
      issuer
      issueDate
      credentialUrl
    }
  }
`;

export const experienceQuery = gql`
  query ExperienceQuery {
    experiences(orderBy: startDate_DESC) {
      id
      company
      role
      startDate
      endDate
      current
      description
    }
  }
`;

export const educationQuery = gql`
  query EducationQuery {
    educations(orderBy: startDate_DESC) {
      id
      institution
      degree
      field
      startDate
      endDate
      description
    }
  }
`;

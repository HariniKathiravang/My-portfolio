import { defineField, defineType } from "sanity";

export default defineType({
  name: "certification",
  title: "Certifications",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "issuer", title: "Issuer", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "issueDate", title: "Issue Date", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "credentialUrl", title: "Credential URL", type: "url" }),
  ],
});

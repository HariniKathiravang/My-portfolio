import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", title: "Company", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "startDate", title: "Start Date", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "endDate", title: "End Date", type: "date" }),
    defineField({ name: "current", title: "Current Role", type: "boolean", initialValue: false }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4, validation: (Rule) => Rule.required() }),
  ],
});

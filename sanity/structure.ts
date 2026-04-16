import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title("Profile").child(S.document().schemaType("profile").documentId("profile")),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("certification").title("Certifications"),
      S.documentTypeListItem("skill").title("Skills"),
      S.documentTypeListItem("experience").title("Experience"),
      S.documentTypeListItem("education").title("Education"),
    ]);

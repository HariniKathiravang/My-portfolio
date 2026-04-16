import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "./client";

export function urlFor(source: any) {
  const builder = imageUrlBuilder(getClient());
  return builder.image(source);
}

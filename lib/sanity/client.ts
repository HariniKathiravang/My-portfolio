import { createClient } from "next-sanity";
import { sanityEnv } from "./env";

export function getClient() {
  return createClient({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
    apiVersion: sanityEnv.apiVersion,
    useCdn: false,
    token: sanityEnv.token,
  });
}

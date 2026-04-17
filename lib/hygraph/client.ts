import { GraphQLClient } from "graphql-request";
import { hygraphEnv, isHygraphConfigured } from "./env";

function getHygraphClient() {
  return new GraphQLClient(hygraphEnv.endpoint, {
    headers: {
      Authorization: `Bearer ${hygraphEnv.token}`,
    },
  });
}

export async function fetchHygraph<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!isHygraphConfigured) {
    throw new Error("Hygraph is not configured.");
  }

  const client = getHygraphClient();
  return client.request<T>(query, variables);
}

export async function fetchHygraphSafe<T>(query: string, fallback: T, variables?: Record<string, unknown>): Promise<T> {
  if (!isHygraphConfigured) {
    return fallback;
  }

  try {
    return await fetchHygraph<T>(query, variables);
  } catch (error) {
    console.error("Hygraph fetch failed. Falling back to safe defaults.", error);
    return fallback;
  }
}

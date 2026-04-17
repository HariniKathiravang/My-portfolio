const endpoint = process.env.HYGRAPH_ENDPOINT || "";
const token = process.env.HYGRAPH_TOKEN || "";

const hasRealEndpoint = endpoint.startsWith("https://") && !endpoint.includes("YOUR_PROJECT_ID");
const hasRealToken = Boolean(token) && !token.includes("YOUR_HYGRAPH_PERMANENT_AUTH_TOKEN");

export const isHygraphConfigured = hasRealEndpoint && hasRealToken;

export const hygraphEnv = {
  endpoint,
  token,
};

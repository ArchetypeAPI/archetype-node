const appId = process.env.APP_ID;
const secretKey = process.env.SECRET_KEY;
const apiBaseUrl = process.env.API_BASE_URL || "https://api.archetype.dev";
const uploadApiBase = "https://files.archetype.dev";
const authVersion = 4;
const constants = {
  appId,
  secretKey,
  apiBaseUrl,
  uploadApiBase,
  authVersion,
};
export default constants;

const appId = process.env.ARCHETYPE_APP_ID
const secretKey = process.env.ARCHETYPE_SECRET_KEY
const apiBaseUrl = process.env.ARCHETYPE_API_BASE_URL || "https://api.archetype.dev";
const uploadApiBase = "https://files.archetype.dev";
const authVersion = 4;

module.exports = {
  appId,
  secretKey,
  apiBaseUrl,
  uploadApiBase,
  authVersion,
}

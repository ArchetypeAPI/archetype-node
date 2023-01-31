
const constants = require('./constants');
const { HttpClient } = require('./HttpClient');

class AuthRequestor {
  constructor() {
this.appId = constants.appId;
    this.secretKey = constants.secretKey;
    this._httpClient = new HttpClient();
    this._baseUrl = constants.apiBaseUrl;
  }

  async request(
    method,
    path,
    urlApiKey,
    bodyApiKey,
    headerApiKey,
    requestHeaders,
    params,
    intent,
  ) {

    const headers = requestHeaders || {
      'X-Archetype-AppID': this.appId,
      'X-Archetype-SecretKey': this.secretKey,
    };

    const data = params || {
      path,
      method,
      "url_api_key": urlApiKey,
      "body_api_key": bodyApiKey,
      "header_api_key": headerApiKey,
    }

    const url = `${constants.apiBaseUrl}/sdk/v${constants.authVersion}/authorize`;
    console.log('Posting to url: ', url)

    const response = await this._httpClient.makeRequest(
      'POST',
      url,
      data,
      headers
    );

    return response.data;
  }
}

module.exports = {
  AuthRequestor,
}

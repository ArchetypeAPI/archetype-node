
const constants = require('./constants');
const HttpClient = require('./HttpClient');

class AuthRequestor {
  private readonly appId: string;
  private readonly secretKey: string;
  private _httpClient: any;
  private _baseUrl: string;
  constructor(appId?: string, secretKey?: string) {
    this.appId = appId || constants.appId;
    this.secretKey = secretKey || constants.secretKey;
    this._httpClient = new HttpClient();
    this._baseUrl = constants.apiBaseUrl;
  }

  async request(
    method: string,
    path: string,
    urlApiKey: string,
    bodyApiKey: string,
    headerApiKey: string,
    requestHeaders: any,
    params: any,
    intent: string,
  ) {

    const headers = {
      'X-Archetype-AppID': this.appId,
      'X-Archetype-SecretKey': this.secretKey,
    };

    const data = {
      path,
      method,
      "body": params,
      "url_apikey": urlApiKey,
      "body_apikey": bodyApiKey,
      "header_apikey": headerApiKey,
    }

    const url = `${constants.apiBaseUrl}/sdk/v${constants.authVersion}/authorize`;

    try {
      return await this._httpClient.makeRequest(
        'POST',
        url,
        data,
        headers
      );
    } catch (error) {
      return error;
    }

  }
}

export {AuthRequestor};
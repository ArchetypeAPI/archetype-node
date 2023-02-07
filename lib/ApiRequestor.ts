const constants =  require("./constants");
const HttpClient = require("./HttpClient");

class ApiRequestor {
  private readonly appId: string;
  private readonly secretKey: string;
  private _httpClient: any;
  private readonly _baseUrl: string;
  constructor(appId?: string, secretKey?: string) {
    this.appId = appId || constants.appId;
    this.secretKey = secretKey || constants.secretKey;
    this._httpClient = new HttpClient();
    this._baseUrl = constants.apiBaseUrl;
  }

  _buildUrl(path: string) {
    return `${this._baseUrl}${path}`;
  }

  _buildHeaders(headers: object) {
    const requestHeaders = {
      'Authorization': `Bearer ${this.secretKey}`,
      'X-Archetype-AppID': this.appId,
      'X-Archetype-SecretKey': this.secretKey,
      'X-Archetype-LiveMode': `${this.secretKey.includes('_sk_prod_')}`,
    };
    return Object.assign(requestHeaders, headers);
  }

  _buildParams(params: object) {
    return params;
  }

  async request(method: string, path: string, params?: object, headers?: object) {
    const url = this._buildUrl(path);
    const requestHeaders = this._buildHeaders(headers);
    const requestParams = this._buildParams(params);
    return this._httpClient.makeRequest(method, url, requestParams, requestHeaders);
  }
}

module.exports = ApiRequestor


const constants =  require("./constants");
const { HttpClient } = require("./HttpClient");

class ApiRequestor {
  constructor() {
    this.appId = constants.appId;
    this.secretKey = constants.secretKey;
    this._httpClient = new HttpClient();
    this._baseUrl = constants.apiBaseUrl;
  }

  request(method, path, params, headers) {
    const url = this._buildUrl(path);
    const requestHeaders = this._buildHeaders(headers);
    const requestParams = this._buildParams(params);
    return this._httpClient.makeRequest(method, url, requestParams, requestHeaders);
  }

  _buildUrl(path) {
    return `${this._baseUrl}${path}`;
  }

  _buildHeaders(headers) {
    const requestHeaders = {
      'Authorization': `Bearer ${this.secretKey}`,
      'X-Archetype-AppID': this.appId,
      'X-Archetype-SecretKey': this.secretKey,
    };
    return Object.assign(requestHeaders, headers);
  }

  _buildParams(params) {
    return params;
  }
}

module.exports = {
  ApiRequestor,
}

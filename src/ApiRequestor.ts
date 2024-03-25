import {Method} from "./utils";
import axios from 'axios';

const constants =  require("./constants");
const HttpClient = require("./HttpClient");

class ApiRequestor {
  private readonly appId: string;
  private readonly secretKey: string;
  private readonly baseUrl: string;

  constructor(appId: string, secretKey: string, baseUrl: string) {
    this.appId = appId;
    this.secretKey = secretKey;
    this.baseUrl = baseUrl;
  }

  _buildUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }

  _buildHeaders() {
    const requestHeaders = {
      'Authorization': `Bearer ${this.secretKey}`,
      'X-Archetype-AppID': this.appId,
      'X-Archetype-SecretKey': this.secretKey,
    };
    return Object.assign(requestHeaders);
  }

  _buildParams(params: object) {
    return params;
  }

  async request(method: Method, path: string, params?: object, body?: object, headers?: object, ) {
    const url = this._buildUrl(path);
    const requestHeaders = this._buildHeaders();
    try {
        const response = await axios.request({
          url: `${url}`,
          method,
          headers: requestHeaders,
          data: body,
          params
        });
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

  }


function APIRequest(appId: string, secretKey: string, method: Method, baseUrl: string, path: string, params?: object, body?: object, intent?: string, ) {
    const apiRequestor = new ApiRequestor(appId,secretKey, baseUrl)

    return apiRequestor.request(method, path, params, {})
}

class ApiRequestorV2 {
  private readonly appId: string;
  private readonly secretKey: string;
  private _httpClient: any;
  private readonly _baseUrl: string;
  constructor(appId?: string, secretKey?: string, baseUrl?: string) {
    this.appId = appId || constants.appId;
    this.secretKey = secretKey || constants.secretKey;
    this._httpClient = new HttpClient();
    this._baseUrl = baseUrl || constants.apiBaseUrl;
  }

  _buildUrl(path: string) {
    return `${this._baseUrl}${path}`;
  }

  _buildHeaders() {
    return {
      'Authorization': `Bearer ${this.secretKey}`,
      'X-Archetype-AppID': this.appId,
      'X-Archetype-SecretKey': this.secretKey,
      'X-Archetype-LiveMode': `${this.secretKey.includes('_sk_prod_')}`,
    };
  }

  _buildParams(params: object) {
    return params;
  }

  async request(method: string, path: string, body?: object, params?: object, headers?: object) {
    const url = this._buildUrl(path);
    const requestHeaders = this._buildHeaders();
    return this._httpClient.makeRequest(method, url, body, params, requestHeaders);
  }
}


export {
    ApiRequestor,
    APIRequest,
    ApiRequestorV2
}

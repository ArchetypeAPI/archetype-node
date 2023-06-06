import { APIRequest } from '../ApiRequestor';
import { ApiRequestorV2 } from '../ApiRequestor';

import { Method } from '../utils';

interface APIResource {
  [key: string]: any;
}  

  export class ApiResource {
    public _requestor: ApiRequestorV2;
    public readonly _objectName: string;

    constructor(objectName: string, appId?: string, secretKey?: string, baseUrl?: string) {
      this._requestor = new ApiRequestorV2(appId, secretKey);
      this._objectName = objectName;
    }

    async retrieve(id: string, version?: number) {
        const resolvedVersion = version !== undefined ? version : 1;
        const path = `/api/v${resolvedVersion}/${this._objectName}/${id}`;
        return this._requestor.request('GET', path);
      }
    
    async all(version?: number) {
        const resolvedVersion = version !== undefined ? version : 1;
        const path = `/api/v${resolvedVersion}/${this._objectName}s`;
        return this._requestor.request('GET', path);
    }
    
    async create(params: any, version?: number) {
      const resolvedVersion = version !== undefined ? version : 1;
      const path = `/api/v${resolvedVersion}/create-${this._objectName}`
      return this._requestor.request('POST', path, params);
    }
  
    async update(id: string, body: any = {}, version?: number, params?: any) {
      const resolvedVersion = version !== undefined ? version : 1;
      const path = `/api/v${resolvedVersion}/${this._objectName}/${id}`;
      return this._requestor.request('PUT', path, body, params);
    }
  
    async delete(id: string, version?: number, params?: any) {
      const resolvedVersion = version !== undefined ? version : 1;
      const path = `/api/v${resolvedVersion}/${this._objectName}/${id}`;
      return this._requestor.request('DELETE', path, params);
    }
  }
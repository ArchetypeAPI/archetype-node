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

    async retrieve(id: string, version: number = 1) {
        const path = `/api/v${version}/${this._objectName}/${id}`;
        return this._requestor.request('GET', path);
      }
    
    async all(version: number = 1) {
        const path = `/api/v${version}/${this._objectName}s`;
        return this._requestor.request('GET', path);
    }
    
    async create(params: any, version: number = 1, ) {
      const path = `/api/v${version}/create-${this._objectName}`
      return this._requestor.request('POST', path, params);
    }
  
    async update(id: string, body: any = {}, version: number = 1, params: any) {
      const path = `/api/v${version}/${this._objectName}/${id}`;
      return this._requestor.request('PUT', path, body, params);
    }
  
    async delete(id: string, version: number = 1, params: any) {
      const path = `/api/v${version}/${this._objectName}/${id}`;
      return this._requestor.request('DELETE', path, params);
    }
  }
  /*

  class RetrievableAPIResource {
    static appId: string;
    static secretKey: string;
    static baseUrl: string;


    static Retrieve(id: string, version: number = 1, ObjectName: string): APIResource {
      const path = `/api/v${version}/${ObjectName}/${id}`;
      return APIRequest(
        this.appId,
        this.secretKey,
        Method.GET,
        this.baseUrl,
        path
      );
    }
  }

  class ListableAPIResource {

    static All(appId: string, secretKey: string, baseUrl: string, version: number = 1, ObjectName: string): APIResource {
      const path = `/api/v${version}/${ObjectName}s`;
      return APIRequest(
        appId,
        secretKey,
        Method.GET,
        baseUrl,
        path
      );
    }
  }


class CreatableAPIResource {
  static Create(version: number = 1, params: any, ObjectName: string): APIResource {
    
    const path = `/api/v${version}/create-${ObjectName}`;
    const apiRequestor = new APIRequest();
    const apiResource = apiRequestor.createRequest({
      requestMethod: Method.POST,
      path,
      object: ObjectName,
      data: params,
      intent: `Create ${ObjectName}`
    });

    return apiResource;
  }
}





class UpdateableAPIResource {
  static Update(id: string, version: number = 1, params: any, ObjectName: string): APIResource {
    const path = `/api/v${version}/${ObjectName}/${id}`;
    const apiRequestor = new APIRequestor();
    const apiResource = apiRequestor.createRequest({
      requestMethod: Method.PUT,
      path,
      object: ObjectName,
      data: params,
      intent: `Update ${ObjectName}: ${id}`
    });

    return apiResource;
  }
}

class DeletableAPIResource {
  static Delete(id: string, version: number = 1, params: any, ObjectName: string): APIResource {

    const path = `/api/v${version}/${ObjectName}/${id}`;
    const apiRequestor = new APIRequestor();
    const apiResource = apiRequestor.createRequest({
      requestMethod: Method.DELETE,
      path,
      object: ObjectName,
      data: params,
      intent: `Delete ${ObjectName} ${id}`
    });

    return apiResource;
  }
}

export {
  CreatableAPIResource,
  RetrievableAPIResource,
  ListableAPIResource,
  UpdateableAPIResource,
  DeletableAPIResource
};
*/

import { ApiResource } from "./resource";

export class Token extends ApiResource {
    constructor(appId?: string, secretKey?: string, baseUrl?: string) {
        super("token", appId, secretKey, baseUrl);
      }
    
      /*
      async create(params: any, version?: number) {
        return super.create(version, params);
      }
      */

      async get(customUid: string, version: number = 1) {
        const path = `/customer-portal/tokens/v1/create`;
        const data = {
          custom_uid: customUid,
        };
        return this._requestor.request('POST', path, data);
    }

}
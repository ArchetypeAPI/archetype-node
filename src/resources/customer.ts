/*import { RetrievableAPIResource, ListableAPIResource } from './resource';
import { Method } from '../utils';
import { APIRequest } from '../ApiRequestor';
*/
//const {ApiResource} = require("./resource");
import { ApiResource } from "./resource";

export class Customer extends ApiResource {

    constructor(appId?: string, secretKey?: string, baseUrl?: string) {
        super("user", appId, secretKey, baseUrl);
    }

    async new(customUid: string, email?: string, name?: string): Promise<any> {
      const params = {
        custom_uid: customUid,
        email: email,
        name: name
      };
  
      return super.create(params, 2);
    }

    async CreateCheckoutSession(customUid: string, productId: string, version?: number) {
        const resolvedVersion = version !== undefined ? version : 1;
        const path = `/api/v${resolvedVersion}/${this._objectName}/${customUid}/payment-link/${productId}`;
        return this._requestor.request('POST', path, {});
    }

    async ResetAPIKey(customUid: string, apikey: string, version?: number, ) {
        const resolvedVersion = version !== undefined ? version : 2;
        const path = `/api/v${resolvedVersion}/${this._objectName}/${customUid}/reset-api-key`;
        const params = {
          apikey: apikey
        }
        return this._requestor.request('POST', path, params);
      }
    
      async CreateSandboxSubscription(customUid: string, productId: string, sandboxDuration: string, version?: number, ) {
        const resolvedVersion = version !== undefined ? version : 1;
        const path = `/api/v${resolvedVersion}/${this._objectName}/${customUid}/create-promo/${productId}`;
        const params = {
          duration: sandboxDuration
        }
        return this._requestor.request('POST', path, params);
      }
    
      async CancelSubscription(customUid: string, version?: number, params: any = {}) {
        const resolvedVersion = version !== undefined ? version : 1;
        const path = `/api/v${resolvedVersion}/${this._objectName}/${customUid}/cancel-subscription`;
        return this._requestor.request('POST', path, params);
      }

      static Usage(): void {
        // Method implementation
      }
    
      static Invoices(): void {
        // Method implementation
      }
}
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

    async CreateCheckoutSession(customUid: string, productId: string, version: number = 1) {
        const path = `/api/v${version}/${this._objectName}/${customUid}/payment-link/${productId}`;
        return this._requestor.request('POST', path, {});
    }

    async ResetAPIKey(customUid: string, version: number = 1, params: any = {}) {
        const path = `/api/v${version}/${this._objectName}/${customUid}/reset-api-key`;
        return this._requestor.request('POST', path, params);
      }
    
      async CreateSandboxSubscription(customUid: string, productId: string, version: number = 1, params: any = {}) {
        const path = `/api/v${version}/${this._objectName}/${customUid}/create-promo/${productId}`;
        return this._requestor.request('POST', path, params);
      }
    
      async CancelSubscription(customUid: string, version: number = 1, params: any = {}) {
        const path = `/api/v${version}/${this._objectName}/${customUid}/cancel-subscription`;
        return this._requestor.request('POST', path, params);
      }

      static Usage(): void {
        // Method implementation
      }
    
      static Invoices(): void {
        // Method implementation
      }
}
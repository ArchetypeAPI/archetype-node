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

/*
    public static CreateCheckoutSession(customUid: string, productId: string, version: number = 1): any {
        const path = `/api/v${version}/${Customer.ObjectName}/${customUid}/payment-link/${productId}`;
        const checkoutSession = APIRequest(Customer.appId, Customer.secretKey, Method.POST, Customer.baseUrl, path);
        return checkoutSession;
  }
 

  public static Retrieve(customUid: string, version: number = 2): any {
    return RetrievableAPIResource.Retrieve(customUid, version, Customer.ObjectName);
  }

  public static All(version: number = 1, params: any = {}): any {
    return ListableAPIResource.All(Customer.appId, Customer.secretKey, Customer.baseUrl, version, params);
  }
 
  static Update(customUid: string, version: number = 1, params: any = {}): any {
    return UpdateableAPIResource.Update(customUid, version, params, this.ObjectName);
  }

  

  
  static ResetAPIKey(customUid: string, version: number = 1, params: any = {}): any {
    const path = `/api/v${version}/${this.ObjectName}/${customUid}/reset-api-key`;
    const apiRequestor = new APIRequestor();
    const customerData = apiRequestor.createRequest(Method.POST, path, this.ObjectName, 'Reset API Key');
    return customerData;
  }

  static CreateSandboxSubscription(customUid: string, productId: string, version: number = 1, params: any = {}): any {
    const path = `/api/v${version}/${this.ObjectName}/${customUid}/create-promo/${productId}`;
    const apiRequestor = new APIRequestor();
    const sandboxSubscription = apiRequestor.createRequest(Method.POST, path, this.ObjectName, params, 'Create Sandbox Subscription');
    return sandboxSubscription;
  }

  static CancelSubscription(customUid: string, version: number = 1): any {
    const path = `/api/v${version}/${this.ObjectName}/${customUid}/cancel-subscription`;
    const apiRequestor = new APIRequestor();
    const customerData = apiRequestor.createRequest(Method.POST, path, this.ObjectName, 'Cancel Subscription');
    return customerData;
  }

  static CreatePaymentLink(customUid: string, productId: string, version: number = 1, params: any = {}): any {
    const path = `/api/v${version}/${this.OBJECT_NAME}/${customUid}/payment-link/${productId}`;
    const apiRequestor = new APIRequestor();
    const paymentLinkData = apiRequestor.createRequest(Method.POST, path, this.ObjectName, params, 'Create Payment Link');
    return paymentLinkData;
  }

  static Usage(): void {
    // Method implementation
  }

  static Invoices(): void {
    // Method implementation
  }
  */
}

//module.exports = {Customer}
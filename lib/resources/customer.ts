import ApiResource from "./api";

class Customer extends ApiResource {
  constructor(appId?: string, secretKey?: string) {
    super("user", appId, secretKey);
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }

  async retrieve(customer_uid: string, version?: number) {
    return super.retrieve(customer_uid, version);
  }

  async all(version?: number) {
    return super.all(version);
  }

  async update(id: string, params: any, version?: number) {
    return super.update(id, version, params);
  }

  async resetApiKey(customer_uid: string, version?: number) {
    const path = `/api/v${version}/${this._objectName}/${customer_uid}/reset-api-key`;
    return this.postRequest(path);
  }

  async createCheckoutSession(
    customer_uid: string,
    product_uid: string,
    version?: number
  ) {
    const path = `/api/v${version}/${this._objectName}/${customer_uid}/checkout-session/${product_uid}`;
    return this.postRequest(path);
  }

  async createSandboxSubscription(
    customer_uid: string,
    product_uid: string,
    data: any,
    version?: number
  ) {
    const path = `/api/v${version}/${this._objectName}/${customer_uid}/create-promo/${product_uid}`;
    return this.postRequest(path);
  }

  async cancelSubscription(customer_uid: string, version?: number) {
    const path = `/api/v${version}/${this._objectName}/${customer_uid}/cancel-subscription`;
    return this.postRequest(path);
  }

  async createPaymentLink(
    customer_uid: string,
    product_id: string,
    data: any,
    version?: number
  ) {
    const path = `/api/v${version}/${this._objectName}/${customer_uid}/payment-link/${product_id}`;
    return this.postRequest(path);
  }
}

export default Customer;

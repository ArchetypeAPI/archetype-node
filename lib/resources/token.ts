import ApiResource from "./api";

class Token extends ApiResource {
  constructor(appId?: string, secretKey?: string) {
    super("token", appId, secretKey);
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }

  async getCustomerPortalsToken(customer_uid: string) {
    const path = `/customer-portal/tokens/v1/create`;
    const data = {
      custom_uid: customer_uid,
    };
    return this.postRequest(path, data);
  }
}

export default Token;

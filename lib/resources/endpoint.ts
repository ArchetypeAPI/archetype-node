import ApiResource from "./api";
class Endpoint extends ApiResource {
  constructor(appId?: string, secretKey?: string) {
    super("endpoint", appId, secretKey);
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }

  async retrieve(endpoint_id: string, version?: number) {
    return super.retrieve(endpoint_id, version);
  }

  async all(version?: number) {
    return super.all(version);
  }

  async update(endpoint_id: string, params: any, version?: number) {
    return super.update(endpoint_id, version, params);
  }

  async delete(endpoint_id: string, params: any, version?: number) {
    return super.delete(endpoint_id, version, params);
  }
}

export default Endpoint;

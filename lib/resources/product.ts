import ApiResource from "./api";

class Product extends ApiResource {
  constructor(appId?: string, secretKey?: string) {
    super("product", appId, secretKey);
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }

  async retrieve(product_id: string, version?: number) {
    return super.retrieve(product_id, version);
  }

  async all(version?: number) {
    return super.all(version);
  }

  async update(product_id: string, params: any, version?: number) {
    return super.update(product_id, version, params);
  }
}

export default Product;

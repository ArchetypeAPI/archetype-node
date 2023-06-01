import { ApiResource } from "./resource";

export class Product extends ApiResource {
    constructor(appId?: string, secretKey?: string, baseUrl?: string) {
        super("product", appId, secretKey, baseUrl);
    }
}
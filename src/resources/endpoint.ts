import { ApiResource } from "./resource";

export class Endpoint extends ApiResource {
    constructor(appId?: string, secretKey?: string, baseUrl?: string) {
        super("endpoint", appId, secretKey, baseUrl);
    }
}
import { ApiResource } from "./resource";

export class BillableMetric extends ApiResource {
    constructor(appId?: string, secretKey?: string, baseUrl?: string) {
        super("billable-metric", appId, secretKey, baseUrl);
    }
}
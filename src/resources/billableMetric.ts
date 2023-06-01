import { ApiResource } from "./resource";

export class BillableMetric extends ApiResource {
    constructor(appId?: string, secretKey?: string, baseUrl?: string) {
        super("billable-metric", appId, secretKey, baseUrl);
    }

    async logUsage(customUid: string, billableMetricId: string, usedAmount: number, version: number = 4) {
        const path = `/sdk/v${version}/log-billable-metric-usage`;
        const data = {
          "custom_uid": customUid,
          "billable_metric_id": billableMetricId,
          "used_amount": usedAmount
        }
        return this._requestor.request('POST', path, data);
      }
    
}
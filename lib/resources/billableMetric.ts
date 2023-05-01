import ApiResource from "./api";

class BillableMetric extends ApiResource {
  constructor(appId?: string, secretKey?: string) {
    super("billable-metric", appId, secretKey);
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }

  async retrieve(billable_metric_id: string, version?: number) {
    return super.retrieve(billable_metric_id, version);
  }

  async all(version?: number) {
    return super.all(version);
  }

  async update(billable_metric_id: string, params: any, version?: number) {
    return super.update(billable_metric_id, version, params);
  }

  async logUsage(
    customer_uid: string,
    billable_metric_id: string,
    used_amount: number,
    version: number = 4
  ) {
    const path = `/sdk/v${version}/log-billable-metric-usage`;
    const data = {
      custom_uid: customer_uid,
      billable_metric_id: billable_metric_id,
      used_amount: used_amount,
    };
    return this.postRequest(path, data);
  }
}

export default BillableMetric;

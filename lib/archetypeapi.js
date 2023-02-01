const Customer = require("./resources/customer");
const Product = require("./resources/product");
const Token = require("./resources/token");
const BillableMetric = require("./resources/billableMetric");
const Auth = require("./resources/auth");


class Archetype {
  constructor(appId, secretKey) {
    this.appId = appId
    this.secretKey = secretKey
    this.Customer = new Customer()
    this.Product = new Product()
    this.Token = new Token()
    this.BillableMetric = new BillableMetric()
  }
}

export {
  Auth,
}


export default function ArchetypeApi(appId, secretKey) {
  return new Archetype(appId, secretKey)
}

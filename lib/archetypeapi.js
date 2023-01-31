const { Customer } = require("./resources/customer");
const { Product } = require("./resources/product");
const { Token } = require("./resources/token");


class Archetype {
  constructor(appId, secretKey) {
    this.appId = appId
    this.secretKey = secretKey
    this.Customer = new Customer()
    this.Product = new Product()
    this.Token = new Token()
  }
}


export default function ArchetypeApi(appId, secretKey) {
  return new Archetype(appId, secretKey)
}

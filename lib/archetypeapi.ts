const Customer = require("./resources/customer");
const Product = require("./resources/product");
const Token = require("./resources/token");
const BillableMetric = require("./resources/billableMetric");
const Auth = require("./resources/auth");
const Endpoint = require("./resources/endpoint");


class Archetype {
  public Customer: typeof Customer;
  public Product: typeof Product;
  public Token: typeof Token;
  public BillableMetric: typeof BillableMetric;
  public Endpoint: typeof Endpoint;
  constructor(appId: string, secretKey: string) {
    this.Customer = new Customer(appId, secretKey)
    this.Product = new Product(appId, secretKey)
    this.Token = new Token(appId, secretKey)
    this.BillableMetric = new BillableMetric(appId, secretKey)
    this.Endpoint = new Endpoint(appId, secretKey)
  }
}

function ArchetypeApi(appId: string, secretKey: string) {
  return new Archetype(appId, secretKey)
}

function sayHello() {
  console.log('Hello Archetype!')
}

function requestTime(req, res, next) {
  req.requestTime = new Date().toLocaleString();
  next()
}

module.exports = ArchetypeApi;

module.exports.ArchetypeApi = ArchetypeApi;
module.exports.sayHello = sayHello;
module.exports.Auth = Auth;
module.exports.requestTime = requestTime;

module.exports.default = ArchetypeApi;

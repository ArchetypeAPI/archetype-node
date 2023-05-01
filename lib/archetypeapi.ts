import CustomerService from "./resources/customer";
import ProductService from "./resources/product";
import TokenService from "./resources/token";
import BillableMetricService from "./resources/billableMetric";
// import Auth from "./resources/auth";
import EndpointService from "./resources/endpoint";

class Archetype {
  public Customer: CustomerService;
  public Product: ProductService;
  public Token: TokenService;
  public BillableMetric: BillableMetricService;
  public Endpoint: EndpointService;
  constructor(appId: string, secretKey: string) {
    this.Customer = new CustomerService(appId, secretKey);
    this.Product = new ProductService(appId, secretKey);
    this.Token = new TokenService(appId, secretKey);
    this.BillableMetric = new BillableMetricService(appId, secretKey);
    this.Endpoint = new EndpointService(appId, secretKey);
  }
}

function ArchetypeApi(appId: string, secretKey: string) {
  return new Archetype(appId, secretKey);
}

function sayHello() {
  console.log("Hello Archetype!");
}

function requestTime(req, res, next) {
  req.requestTime = new Date().toLocaleString();
  next();
}

// module.exports.ArchetypeApi = ArchetypeApi;
// module.exports.sayHello = sayHello;
// module.exports.Auth = Auth;
// module.exports.requestTime = requestTime;

export default ArchetypeApi;

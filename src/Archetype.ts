import { BillableMetric } from "./resources/billableMetric";
import { Customer } from "./resources/customer";
import { Endpoint } from "./resources/endpoint";
import { Product } from "./resources/product";
import { Token } from "./resources/token";

const constants =  require("./constants");

//import { RetrievableAPIResource } from "./resources/resource";
class Archetype {
    private static instance: Archetype;
    private readonly appId: string;
    private readonly secretKey: string;
    private readonly baseUrl: string = "https://api.archetype.dev";
    public customer: Customer;
    public endpoint: Endpoint;
    public product: Product;
    public billableMetric: BillableMetric;
    public token: Token;


    constructor(appId?: string , secretKey?: string, baseUrl?: string) {
      this.appId = appId || constants.appId;
      this.secretKey = secretKey || constants.secretKey;
      this.baseUrl = baseUrl || constants.apiBaseUrl;
      this.endpoint = new Endpoint(this.appId, this.secretKey, this.baseUrl)
      this.product = new Product(this.appId, this.secretKey, this.baseUrl)
      this.billableMetric = new BillableMetric(this.appId, this.secretKey, this.baseUrl)
      this.token = new Token(this.appId, this.secretKey, this.baseUrl)
      this.customer = new Customer(this.appId, this.secretKey, this.baseUrl)

      if (!this.appId || !this.secretKey) {
        throw new Error('App ID and Secret Key must be provided');
      }
    }

    public static getArchetypeInstance(appId?: string, secretKey?: string, baseUrl?: string): Archetype {
        if (!Archetype.instance) {
            if (!appId || !secretKey) {
                throw new Error('App ID and Secret Key must be provided');
              }
            Archetype.instance = new Archetype(appId, secretKey, baseUrl);
        }
        return Archetype.instance;
      }

      public getAppId(): string {
        return this.appId;
      }

      public getSecretKey(): string {
        return this.secretKey;
      }

  }


export { Archetype };

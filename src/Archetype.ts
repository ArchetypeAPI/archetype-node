import { BillableMetric } from "./resources/billableMetric";
import { Customer } from "./resources/customer";
import { Endpoint } from "./resources/endpoint";
import { Product } from "./resources/product";
import { Token } from "./resources/token";

//import { RetrievableAPIResource } from "./resources/resource";
class Archetype {
    private static instance: Archetype;
    private appId: string;
    private secretKey: string;
    private baseUrl = "https://api.archetype.dev";
    public customer: Customer;
    public endpoint: Endpoint;
    public product: Product;
    public billableMetric: BillableMetric;
    public token: Token;


    constructor(appId: string, secretKey: string, baseUrl?: string) {
      this.appId = appId;
      this.secretKey = secretKey;
      this.baseUrl = baseUrl || this.baseUrl
      this.endpoint = new Endpoint(appId, secretKey, this.baseUrl)
      this.product = new Product(appId, secretKey, this.baseUrl)
      this.billableMetric = new BillableMetric(appId, secretKey, this.baseUrl)
      this.token = new Token(appId, secretKey, this.baseUrl)
      this.customer = new Customer(appId, secretKey, this.baseUrl)
    }

    public static getArchetypeInstance(appId?: string, secretKey?: string): Archetype {
        if (!Archetype.instance) {
            if (!appId || !secretKey) {
                throw new Error('App ID and Secret Key must be provided');
              }
            Archetype.instance = new Archetype(appId, secretKey);
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
  
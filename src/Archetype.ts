import { BillableMetric } from "./resources/billableMetric";
import { Customer } from "./resources/customer";
import { Endpoint } from "./resources/endpoint";
import { Product } from "./resources/product";
import { Token } from "./resources/token";

//import { RetrievableAPIResource } from "./resources/resource";
class ArchetypeAPI {
    private static instance: ArchetypeAPI;
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

    public static getArchetypeInstance(appId?: string, secretKey?: string): ArchetypeAPI {
        if (!ArchetypeAPI.instance) {
            if (!appId || !secretKey) {
                throw new Error('App ID and Secret Key must be provided');
              }
            ArchetypeAPI.instance = new ArchetypeAPI(appId, secretKey);
        }
        return ArchetypeAPI.instance;
      }
    
      public getAppId(): string {
        return this.appId;
      }

      public getSecretKey(): string {
        return this.secretKey;
      }
  
  }
  
function Archetype(appId: string, secretKey: string) {
    
    return new ArchetypeAPI(appId, secretKey);
}

export { Archetype};
  
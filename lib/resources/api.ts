import path from 'path';
import { RequestQueue } from '../../RequestQueue';


export class ApiResource {
  private secretKey: string;
  private requestQueue: RequestQueue;

  constructor(baseURL: string, secretKey: string) {
    this.secretKey = secretKey;
    this.requestQueue = new RequestQueue(baseURL, path.join('./lib/resources/', '..', '..', 'apiWorker.js'));
  }

  public async create(version: number = 1, params: any): Promise<any> {
    const config = {
      functionName: 'sendRequest',
      functionArgs: [
        this.secretKey,
        {
          url: `/api/v${version}/create-product`,
          method: 'post',
          params: params,
        },
      ],
    };

    try {
      return this.requestQueue.execute(config);
    } catch (error) {
      console.error('Error creating products:', error);
      throw error;
    }
  }

  public async retrieve(id: string, version: number = 1): Promise<any> {
    const config = {
      functionName: 'sendRequest',
      functionArgs: [
        this.secretKey,
        {
          url: `/api/v${version}/product/${id}`,
          method: 'get',
        },
      ],
    };

    try {
      return this.requestQueue.execute(config);
    } catch (error) {
      console.error('Error retrieving product:', error);
      throw error;
    }
  }

  public async update(id: string, version: number = 1, params: any): Promise<any> {
    const config = {
      functionName: 'sendRequest',
      functionArgs: [
        this.secretKey,
        {
          url: `/api/v${version}/product/${id}`,
          method: 'put',
          params,
        },
      ],
    };

    try {
      return this.requestQueue.execute(config);
    } catch (error) {
      console.error('Error modifying product:', error);
      throw error;
    }
  }

  public async delete(id: string, version: number = 1): Promise<any> {
    const config = {
      functionName: 'sendRequest',
      functionArgs: [
        this.secretKey,
        {
          url: `/api/v${version}/product/${id}`,
          method: 'delete',
        },
      ],
    };

    try {
      return this.requestQueue.execute(config);
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }

  public async list(version: number = 1): Promise<any> {
    const config = {
      functionName: 'sendRequest',
      functionArgs: [
        this.secretKey,
        {
          url: `/api/v${version}/products`,
          method: 'get',
        },
      ],
    };

    try {
      return this.requestQueue.execute(config);
    } catch (error) {
      console.error('Error retrieving all products:', error);
      throw error;
    }
  }
}

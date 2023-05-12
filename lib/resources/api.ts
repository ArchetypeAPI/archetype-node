
import { AxiosInstance } from 'axios';
import workerpool from 'workerpool';
import path from 'path';


class ApiResource {
  private apiClient: AxiosInstance;
  private pool: workerpool.WorkerPool;
  private _objectName: string;
  private secretKey: string;
  
  constructor(secretKey: string) {
    this.secretKey = secretKey;
    this.pool = workerpool.pool(path.join("./lib/resources/", '..', '..', 'apiWorker.js'));
  }

  public async create(version: number = 1, params: any): Promise<any> {
    const config = {
      url: `${this.apiClient.defaults.baseURL}/api/v${version}/create-${this._objectName}`,
      method: 'post',
      headers: this.apiClient.defaults.headers,
      params,
    };

    try {
      const result = await this.pool.exec('sendRequest', [this.secretKey, config]);
      return result;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  public async retrieve(id: string, version: number = 1): Promise<any> {
    const config = {
      url: `${this.apiClient.defaults.baseURL}/api/v${version}/${this._objectName}/${id}`,
      method: 'get',
      headers: this.apiClient.defaults.headers,
    };

    try {
      const result = await this.pool.exec('sendRequest', [this.secretKey, config]);
      return result;
    } catch (error) {
      console.error('Error retrieving products:', error);
      throw error;
    }
  }

  public async update(id: string, version: number = 1, params: any): Promise<any> {
    const config = {
      url: `${this.apiClient.defaults.baseURL}/api/v${version}/create-${this._objectName}`,
      method: 'put',
      headers: this.apiClient.defaults.headers,
      params,
    };

    try {
      const result = await this.pool.exec('sendRequest', [this.secretKey, config]);
      return result;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  public async delete(id: string, version: number = 1): Promise<any> {
    const config = {
      url: `${this.apiClient.defaults.baseURL}/api/v${version}/${this._objectName}/${id}`,
      method: 'delete',
      headers: this.apiClient.defaults.headers,
    };

    try {
      const result = await this.pool.exec('sendRequest', [this.secretKey, config]);
      return result;
    } catch (error) {
      console.error('Error deleting products:', error);
      throw error;
    }
  }

  public async list(version: number = 1): Promise<any> {
    const config = {
      url: `${this.apiClient.defaults.baseURL}/api/v${version}/${this._objectName}`,
      method: 'get',
      headers: this.apiClient.defaults.headers,
    };

    try {
      const result = await this.pool.exec('sendRequest', [this.secretKey, config]);
      return result;
    } catch (error) {
      console.error('Error retrieving products:', error);
      throw error;
    }
  }
}

export { ApiResource };

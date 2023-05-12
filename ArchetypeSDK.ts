import { ApiResource } from './lib/resources/api';

export class ArchetypeSDK {
  public apis: ApiResource;

  constructor(baseURL: string, secretKey: string) {
    this.apis = new ApiResource(baseURL, secretKey);
  }
}

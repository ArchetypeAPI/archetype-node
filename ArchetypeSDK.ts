import { ApiResource } from './lib/resources/api';

export class ArchetypeSDK {
  public apis: ApiResource;

  constructor(secretKey: string) {
    this.apis = new ApiResource(secretKey);
  }
}

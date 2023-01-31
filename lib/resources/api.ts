
const api_requestor = require('../ApiRequestor');

const ApiRequestor = new api_requestor.ApiRequestor();
class ApiResource {
  private _requestor: any;
  private readonly _objectName: string;
  constructor(objectName: string) {
    this._requestor = ApiRequestor;
    this._objectName = objectName;
  }

  async create(version: number = 1, params: any) {
    const path = `/api/v${version}/create-${this._objectName}`
    return this._requestor.request('POST', path, params);
  }

  async retrieve(id: string, version: number = 1) {
    const path = `/api/v${version}/${this._objectName}/${id}`;
    return this._requestor.request('GET', path);
  }

  async all(version: number) {
    const path = `/api/v${version}/${this._objectName}s`;
    return this._requestor.request('GET', path);
  }

  async update(id: string, version: number = 1, params: any) {
    const path = `/api/v${version}/${this._objectName}/${id}`;
    return this._requestor.request('PUT', path, params);
  }

  async delete(id: string, version: number = 1, params: any) {
    const path = `/api/v${version}/${this._objectName}/${id}`;
    return this._requestor.request('DELETE', path, params);
  }
}

module.exports = {
  ApiResource,
}

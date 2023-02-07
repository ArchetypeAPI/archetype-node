const { ApiResource } = require('./api');

class Token extends ApiResource {
  constructor(appId?: string, secretKey?: string) {
    super('token', appId, secretKey);
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }
}

module.exports = Token;

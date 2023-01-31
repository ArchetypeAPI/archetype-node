const { ApiResource } = require('./api');

class Token extends ApiResource {
  constructor() {
    super('token');
  }

  async create(params: any, version?: number) {
    return super.create(version, params);
  }
}

module.exports = {
  Token,
}

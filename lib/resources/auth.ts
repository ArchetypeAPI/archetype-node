const authRequestor = require('../AuthRequestor');
const AuthRequestor = new authRequestor();
function AuthMiddleware(next) {
  return async (req, res) => {
    const startTime = Date.now();
    const headers = req.headers;
    const body = req.body;
    const params = req.params;

    const headerApiKey = headers['apikey'];
    const bodyApiKey = body['apikey'];
    const urlApiKey = params['apikey'];

    const path = req.path;
    const method = req.method;

    const authResponse = await AuthRequestor.request(method, path, urlApiKey, bodyApiKey, headerApiKey, headers, body);

    if (authResponse.status < 400) {
      next(req, res);
    }
    else {
      res.status(authResponse.status).send(authResponse);
    }
  };
}

module.exports = AuthMiddleware;

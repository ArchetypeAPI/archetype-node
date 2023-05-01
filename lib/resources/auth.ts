import AuthRequestor from "../AuthRequestor";

const AuthMiddleware =
  (appId: string, secretKey: string) =>
  async (req: any, res: any, next: any) => {
    const authRequestor = new AuthRequestor(appId, secretKey);
    const headers = req.headers;
    const body = req.body;
    const params = req.params;

    const headerApiKey = body["header_apikey"];
    const bodyApiKey = body["body_apikey"];
    const urlApiKey = params["url_apikey"];

    const path = req.path;
    const method = req.method;

    const authResponse = await authRequestor.request(
      method,
      path,
      urlApiKey,
      bodyApiKey,
      headerApiKey,
      headers,
      body
    );

    if (authResponse?.status < 400) {
      next();
    } else {
      res.status(authResponse.status || 401).send(authResponse);
    }
  };

export default AuthMiddleware;

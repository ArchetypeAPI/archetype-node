// create an HttpClient class using axios
import axios from "axios";

class HttpClient {
  private _client: any;
  constructor() {
    this._client = axios.create({});
  }
  getClientName() {
    return "axios";
  }
  async makeRequest(
    method: string,
    url: string,
    data?: object,
    headers?: object,
    timeout?: number
  ) {
    const options = {
      method,
      url,
      headers,
      data,
      timeout,
    };

    try {
      const response = await this._client.request(options);

      if (response["data"]) return response["data"];
      return response;
    } catch (err) {
      let error = err;
      if (err.response) {
        if (err.response.data) {
          error = err.response.data;
        } else {
          error = err.response;
        }
      }

      let errorReason = "";
      if (error["detail"]) {
        errorReason = error["detail"];
        if (error["error"]) {
          errorReason = error["error"];
        } else if (error["message"]) {
          errorReason = error["message"];
        }
      } else if (error["error"]) {
        errorReason = error["error"];
      } else if (error["message"]) {
        errorReason = error["message"];
      }

      if (errorReason) {
        return errorReason;
      } else {
        return error;
      }
    }
  }
}

// function HttpClientService(appId: string, secretKey: string) {
//   return HttpClient();
// }
export default HttpClient;

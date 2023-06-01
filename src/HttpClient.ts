// create an HttpClient class using axios
const axios = require('axios');

class HttpClient {
    private _client: any;
    constructor() {
        this._client = axios.create({});
    }
    getClientName() {
        return 'axios';
    }
    async makeRequest(method: string, url: string, body: object = {}, params?: object, headers?: object, timeout?: number) {
        var options = {}
        if (method == "GET") {
            options = {
                method,
                url,
                headers
            };
        } else {
            options = {
                method,
                url,
                headers,
                data:body,
                timeout,
            };
        }
       
        
        try {
            const response = await this._client.request(options);

            if (response["data"])
                return response["data"];
            return response;

        } catch (err: any) {
            let error = err
            if (err.response) {
                if (err.response.data) {
                    error = err.response.data;
                } else {
                    error = err.response;
                }
            }

            let errorReason = '';
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

module.exports = HttpClient;
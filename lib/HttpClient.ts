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
    makeRequest(method: string, url: string, data?: object, headers?: object, timeout?: number) {
        const options = {
            method,
            url,
            headers,
            data,
            timeout,
        };
        return this._client.request(options);
    }
}

module.exports = HttpClient;

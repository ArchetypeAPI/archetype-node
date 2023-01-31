// create an HttpClient class using axios
const axios = require('axios');

class HttpClient {
    constructor() {
        this._client = axios.create({});
    }
    getClientName() {
        return 'axios';
    }
    makeRequest(method, url, data, headers, protocol, timeout) {
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

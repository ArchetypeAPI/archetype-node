import axios, { AxiosRequestConfig } from 'axios';

async function sendRequest(secretKey: string, config: AxiosRequestConfig): Promise<any> {
  const apiClient = axios.create({
    headers: {
      'Authorization': `Bearer ${secretKey}`,
    },
  });

  try {
    const response = await apiClient(config);
    return response.data;
  } catch (error) {
    console.error('Error sending request:', error);
    throw error;
  }
}

export default {
  sendRequest,
};

export { api }

import { AxiosRequestConfig } from 'axios';
import { httpClient } from './http';

const api = {
    $get: async (url: string, config?: AxiosRequestConfig) => (httpClient.get(url, config)),
    $delete: async (url: string, config?: AxiosRequestConfig) => (await httpClient.delete(url, config)),
    $post: async (url: string, data: any, config?: AxiosRequestConfig) => (await httpClient.post(url, data, config)),
    $put: async (url: string, data: any, config?: AxiosRequestConfig) => (await httpClient.put(url, data, config)),
    $patch: async (url: string, data: any, config?: AxiosRequestConfig) => (await httpClient.patch(url, data, config)),
}
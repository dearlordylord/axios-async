import axios from 'axios';

// Define our own types based on axios API
export type AxiosRequestConfig = Parameters<typeof axios.request>[0];
export type AxiosResponse<T = any> = Awaited<ReturnType<typeof axios.request<T>>>;

// Define our async interfaces
export interface AsyncAxiosInstance {
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  
  // Add other axios properties
  defaults: any;
  interceptors: any;
  getUri(config?: AxiosRequestConfig): string;
}

export interface AsyncAxiosStatic extends AsyncAxiosInstance {
  create(config?: AxiosRequestConfig): AsyncAxiosInstance;
  isCancel(value: any): boolean;
  CancelToken: any;
  Cancel: any;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError(payload: any): payload is Error;
}
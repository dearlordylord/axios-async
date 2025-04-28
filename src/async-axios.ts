import axios from 'axios';
import { AsyncAxiosInstance, AsyncAxiosStatic } from './types';

/**
 * Create an AsyncAxios instance with the provided config
 */
export function createAsyncAxiosInstance(config?: Parameters<typeof axios.create>[0]): AsyncAxiosInstance {
  // Create the base axios instance
  const axiosInstance = axios.create(config);
  
  // Create our async wrapper instance
  const asyncAxiosInstance = axiosInstance as unknown as AsyncAxiosInstance;
  
  // The methods are already async (they return promises) so we don't need to modify them
  // This is essentially a type wrapper that ensures the correct types are used

  return asyncAxiosInstance;
}

/**
 * Create an AsyncAxiosStatic that mirrors the axios static object
 */
export const asyncAxios: AsyncAxiosStatic = {
  ...axios,
  create: createAsyncAxiosInstance,
} as unknown as AsyncAxiosStatic;

// Create a default instance
const defaultInstance = createAsyncAxiosInstance();

// Add all axios properties to the default instance
if (defaultInstance) {
  Object.assign(defaultInstance, asyncAxios);
}

// Export the default instance
export default defaultInstance as unknown as AsyncAxiosStatic;
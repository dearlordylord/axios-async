import axios from 'axios';
import { AsyncAxiosInstance, AsyncAxiosStatic } from './types';
/**
 * Create an AsyncAxios instance with the provided config
 */
export declare function createAsyncAxiosInstance(config?: Parameters<typeof axios.create>[0]): AsyncAxiosInstance;
/**
 * Create an AsyncAxiosStatic that mirrors the axios static object
 */
export declare const asyncAxios: AsyncAxiosStatic;
declare const _default: AsyncAxiosStatic;
export default _default;
//# sourceMappingURL=async-axios.d.ts.map
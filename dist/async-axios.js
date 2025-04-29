"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncAxios = void 0;
exports.createAsyncAxiosInstance = createAsyncAxiosInstance;
const axios_1 = __importDefault(require("axios"));
/**
 * Create an AsyncAxios instance with the provided config
 */
function createAsyncAxiosInstance(config) {
    // Create the base axios instance
    const axiosInstance = axios_1.default.create(config);
    // Create our async wrapper instance
    const asyncAxiosInstance = axiosInstance;
    // The methods are already async (they return promises) so we don't need to modify them
    // This is essentially a type wrapper that ensures the correct types are used
    return asyncAxiosInstance;
}
/**
 * Create an AsyncAxiosStatic that mirrors the axios static object
 */
exports.asyncAxios = Object.assign(Object.assign({}, axios_1.default), { create: createAsyncAxiosInstance });
// Create a default instance
const defaultInstance = createAsyncAxiosInstance();
// Add all axios properties to the default instance
if (defaultInstance) {
    Object.assign(defaultInstance, exports.asyncAxios);
}
// Export the default instance
exports.default = defaultInstance;
//# sourceMappingURL=async-axios.js.map
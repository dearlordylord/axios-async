// Mock axios first - before any imports
const mockGet = jest.fn();
const mockPost = jest.fn();
const mockPut = jest.fn();
const mockDelete = jest.fn();
const mockPatch = jest.fn();
const mockHead = jest.fn();
const mockOptions = jest.fn();
const mockRequest = jest.fn();
const mockCreate = jest.fn().mockImplementation(() => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  patch: jest.fn(),
  head: jest.fn(),
  options: jest.fn(),
  request: jest.fn(),
  defaults: {},
  interceptors: { request: {}, response: {} },
  getUri: jest.fn()
}));
const mockAxios = {
  get: mockGet,
  post: mockPost,
  put: mockPut,
  delete: mockDelete,
  patch: mockPatch,
  head: mockHead,
  options: mockOptions,
  request: mockRequest,
  create: mockCreate,
  defaults: {},
  interceptors: { request: {}, response: {} },
  getUri: jest.fn(),
  CancelToken: {},
  Cancel: {},
  isCancel: jest.fn(),
  all: jest.fn(),
  spread: jest.fn(),
  isAxiosError: jest.fn()
};

jest.mock('axios', () => mockAxios);

// Import after mocking
import axios from 'axios';
import asyncAxios from '../src';
import { AsyncAxiosInstance } from '../src/types';

describe('AsyncAxios', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should maintain the same interface as axios', () => {
    // Verify that asyncAxios has the same methods as axios
    expect(typeof asyncAxios.get).toBe('function');
    expect(typeof asyncAxios.post).toBe('function');
    expect(typeof asyncAxios.put).toBe('function');
    expect(typeof asyncAxios.delete).toBe('function');
    expect(typeof asyncAxios.patch).toBe('function');
    expect(typeof asyncAxios.head).toBe('function');
    expect(typeof asyncAxios.options).toBe('function');
    expect(typeof asyncAxios.create).toBe('function');
  });

  test('should correctly wrap axios methods', async () => {
    const mockResponseData = { id: 1, name: 'test' };
    const mockResponse = { data: mockResponseData, status: 200, statusText: 'OK', headers: {}, config: {} };
    
    // Mock axios.get to return the mock response
    mockGet.mockResolvedValue(mockResponse);
    
    // Call asyncAxios.get and expect it to return the same response as axios.get
    const result = await asyncAxios.get('/test');
    
    // Verify that axios.get was called
    expect(mockGet).toHaveBeenCalledWith('/test');
    
    // Verify that the response is the same
    expect(result).toEqual(mockResponse);
  });

  test('should create a custom instance that works the same way', async () => {
    const mockResponseData = { id: 2, name: 'custom' };
    const mockResponse = { data: mockResponseData, status: 200, statusText: 'OK', headers: {}, config: {} };
    
    // Create mock instance for axios.create to return
    const mockAxiosInstance = {
      get: jest.fn().mockResolvedValue(mockResponse),
      post: jest.fn(),
      put: jest.fn(),
      patch: jest.fn(),
      delete: jest.fn(),
      head: jest.fn(),
      options: jest.fn(),
      request: jest.fn(),
      defaults: {},
      interceptors: { request: {}, response: {} },
      getUri: jest.fn(),
    };
    
    // Make axios.create return our mocked instance
    mockCreate.mockReturnValue(mockAxiosInstance);
    
    // Create a custom asyncAxios instance
    const customInstance = asyncAxios.create({
      baseURL: 'https://api.example.com',
    });
    
    // Call the custom instance's get method
    const result = await customInstance.get('/custom');
    
    // Verify that axios.create was called with the correct config
    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'https://api.example.com',
    });
    
    // Verify that the custom instance's get method was called
    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/custom');
    
    // Verify that the response is correct
    expect(result).toEqual(mockResponse);
  });
});
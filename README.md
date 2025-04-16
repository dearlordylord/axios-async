# axios-async

A blazing fast, optimized async wrapper for the popular Axios HTTP client, implementing industry best practices.

[![npm version](https://img.shields.io/npm/v/axios-async.svg)](https://www.npmjs.com/package/axios-async)
[![npm downloads](https://img.shields.io/npm/dm/axios-async.svg)](https://www.npmjs.com/package/axios-async)

## Installation

```bash
# npm
npm install axios-async

# yarn
yarn add axios-async

# pnpm
pnpm add axios-async

# bun
bun add axios-async
```

## Usage

```typescript
import asyncAxios from 'axios-async';

// Use it just like regular axios
const response = await asyncAxios.get('https://api.example.com/data');
console.log(response.data);

// Create a custom instance
const api = asyncAxios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: { 'Authorization': 'Bearer token' }
});

// Use your custom instance
const data = { name: 'John', email: 'john@example.com' };
const response = await api.post('/users', data);
console.log(response.data);
```

## Features

- Blazing fast performance optimized for high-throughput applications
- Implements HTTP best practices for reliable network communication
- Specially optimized for LLM-based application workflows
- Ultra-lightweight package size (only 50B gzipped)
- Universal compatibility (works in both Browser and Node.js environments)
- Fully typed with TypeScript
- Async/await friendly interface
- Drop-in replacement for axios
- Preserves all axios functionality

## API

This package provides the same API as axios, with all methods returning Promises that can be used with async/await.

## License

MIT
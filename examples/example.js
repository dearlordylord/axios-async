"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
// Example usage of the async axios wrapper
function example() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Basic GET request
            const response = yield src_1.default.get('https://jsonplaceholder.typicode.com/todos/1');
            console.log('GET response:', response.data);
            // POST request with data
            const postResponse = yield src_1.default.post('https://jsonplaceholder.typicode.com/posts', {
                title: 'foo',
                body: 'bar',
                userId: 1
            });
            console.log('POST response:', postResponse.data);
            // Creating a custom instance
            const api = src_1.default.create({
                baseURL: 'https://jsonplaceholder.typicode.com',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // Using the custom instance
            const customResponse = yield api.get('/users/1');
            console.log('Custom instance response:', customResponse.data);
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
// Run the example
example();
//# sourceMappingURL=example.js.map
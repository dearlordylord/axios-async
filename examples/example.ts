import asyncAxios from '../src'; // From axios-async package

// Example usage of the async axios wrapper
async function example() {
  try {
    // Basic GET request
    const response = await asyncAxios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('GET response:', response.data);
    
    // POST request with data
    const postResponse = await asyncAxios.post(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    );
    console.log('POST response:', postResponse.data);
    
    // Creating a custom instance
    const api = asyncAxios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    // Using the custom instance
    const customResponse = await api.get('/users/1');
    console.log('Custom instance response:', customResponse.data);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
example();
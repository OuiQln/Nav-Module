const request = require('supertest');
const app = require('../server/index.js')
describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/search?:pants');
    expect(response.statusCode).toBe(200);
  });
})
const app = require('../server/index.js');
const request = require('supertest');


describe('The server should be defined', ()=> {
  test('The server should be defined' , () => {
    expect(app).toBeDefined();
  });
})

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
    })
  });
})



var request = require('supertest');
var app = require('../index.js');
describe('GET /other', function() {
    it('respond with hello world', function(done) {
        request(app).get('/other').expect('{ "response": "Hello from the other side" }', done);
    });
});
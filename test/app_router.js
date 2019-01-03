var app = require('../app_router.js')
var request = require('supertest')

describe('# This is a test sample.', function() {
  it('This is a test for /.', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'response from node service!'
      }, done);
  });
});

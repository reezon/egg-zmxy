'use strict';

const mock = require('egg-mock');

describe('test/zmxy.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/zmxy-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, zmxy')
      .expect(200);
  });
});

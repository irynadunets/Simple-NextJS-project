var createMocks = require('node-mocks-http');
var handleUser= require('../pages/api/greetings/[first_name]');

describe('/api/greetings/first_name]', () => {

  test('returns a message with the specified first_name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        first_name: 'Ted',
      },
    });

    await handleUser(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        greetings: `Hello  Ted!`,
      }),
    );
  });
});

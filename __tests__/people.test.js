const mockAxios = require('axios');
const people = require('../lambdas/endpoints/people');
const peopleGetMocks = require('../__mocks__/peopleGetMocks');

test('Debería verificar el servicio GET undefinded', async (done) => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(peopleGetMocks.respuesta));

  return people.handler({}).then((response) => {
    expect(response.respuesta).toBeUndefined();
    expect(response.statusCode).toBe(400);
    done();
  });
});

test('Debería verificar el servicio GET existe', async (done) => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(peopleGetMocks.respuesta));
  const event = {
    pathParameters: {
      id: 1,
    },
  };

  return await people.handler(event).then((res) => {
    expect(res.body).toBeDefined();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    done();
  });
});

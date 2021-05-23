const mockAxios = require('axios');
const films = require('../lambdas/endpoints/films');
const filmsMocks = require('../__mocks__/filmsMocks');

test('Deberia verificar el servicio GET undefinded', async (done) => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(filmsMocks.respuesta));

  return films.handler({}).then((response) => {
    expect(response.respuesta).toBeUndefined();
    expect(response.statusCode).toBe(400);
    done();
  });
});

test('Deberia verificar el servicio GET iguales', async (done) => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(filmsMocks.respuesta));
  const event = {
    pathParameters: {
      id: 1,
    },
  };

  return await films.handler(event).then((res) => {
    expect(res.body).toBeDefined();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    done();
  });
});

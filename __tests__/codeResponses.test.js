const Responses = require('../lambdas/common/codeResponses');

test('Debería verificar si es objecto', () => {
    expect(typeof Responses).toBe('object');
});

test('Debería verificar el código 200', () => {
    const res = Responses._200({ nombre: 'juana' });
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json');
});

test('Debería verificar el código 400', () => {
    const res = Responses._400({ nombre: 'juana' });
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json');
});


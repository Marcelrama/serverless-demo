
const createPeople = require("../lambdas/endpoints/createPeople");
test("Debería verificar el servicio POST Undefined", async (done) => {
  return createPeople.handler({}).then((response) => {
    expect(response.statusCode).toBe(400);
    done();
  });
});

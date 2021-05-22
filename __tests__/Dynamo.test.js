const Dynamo = require('../lambdas/common/Dynamo');
const peoplePostMocks = require("../__mocks__/peoplePostMocks");
const uuid = require('uuid');

test('Debería ser un ojecto', () => {
    expect(typeof Dynamo).toBe('object');
});

const validTableName = 'people';
const id = uuid.v1();
const data = Object.assign(peoplePostMocks, {ID: id});

test('Debería escribir', async (done) => {
    try {
        const res = await Dynamo.write(data, validTableName);
        expect(res).toBe(data);
        done();
    } catch (error) {
        console.log('Error en escribir dynamo', error);
        done();
    }
});

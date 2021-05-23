const Responses = require('../common/codeResponses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async () => {
  const people = await Dynamo.getAll(tableName).catch((err) => {
    console.log('err', err);
    return null;
  });

  if (!people) {
    return Responses._400({ message: 'Servicio falla al obtener los personsajes' });
  }

  return Responses._200( people.Items );
};

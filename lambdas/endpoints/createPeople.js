const uuid = require('uuid');

const Responses = require('../common/codeResponses');
const Dynamo = require('../common/Dynamo');
const UTIL = require('../common/utils');
const PeopleDTO = require('../Models/PeopleDTO');

const tableName = process.env.tableName;

module.exports.handler = async (event) => {
  const body = event.body;

  if (!body) {
    return Responses._400({ message: 'Request invalida' });
  }

  if (!body) {
    return Responses._400({ message: 'Faltan parametros' });
  }

  const validation = UTIL.validteFields(JSON.parse(body));
  if (!validation.status){
    return Responses._400({ message: validation.msj });
  }

  const id = uuid.v1();
  const res = UTIL.ConvertKeyValue(JSON.parse(body), PeopleDTO);

  const people = Object.assign(res, { 
    ID: id,
    fecha_edicion: new Date(),
    fecha_creacion: new Date() 
  });
 
  const addPeople = await Dynamo.write(people, tableName).catch((err) => {
    console.log('err', err);
    return null;
  });

  return Responses._200(addPeople);
};

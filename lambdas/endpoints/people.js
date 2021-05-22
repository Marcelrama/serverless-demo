
const axios = require('axios');
const Responses = require('../common/codeResponses');
const UTIL = require('../common/utils');
const PeopleDTO = require('../Models/PeopleDTO');
const swapiApi = process.env.swapiApi;

exports.handler = async event => {
 
     // se Verifica que existe el id en la url
    if (!event.pathParameters || !event.pathParameters.id) {
        return Responses._400({ message: 'ID no encontrado' });
    }

    let id = event.pathParameters.id;
    const url = `${ swapiApi }/people/${ id }/?format=json`;
    // se consume el servicio de swapiApi
    const people = await axios.get(url);

    if (!people) {
        return Responses._400({ message: 'Servicio falla al obtener People' });
    }
    // Se convierte al modelo en español
    let respuesta = UTIL.ConvertKeyValue(people.data, PeopleDTO);

    return Responses._200(respuesta);
};
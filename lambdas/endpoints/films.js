
const axios = require('axios');
const Responses = require('../common/codeResponses');
const UTIL = require('../common/utils');
const FilmsDTO = require('../Models/FilmsDTO');
const swapiApi = process.env.swapiApi;

exports.handler = async event => {

     // se Verifica que existe el id en la url
    if (!event.pathParameters || !event.pathParameters.id) {
       
        return Responses._400({ message: 'ID no encontrado' });
    }

    let id = event.pathParameters.id;
    const url = `${ swapiApi }/films/${ id }/?format=json`;
    // se consume el servicio de swapiApi
    const films = await axios.get(url);

    if (!films) {
        return Responses._400({ message: 'Servicio falla al obtener Films' });
    }
    // Se convierte al modelo en español
    let respuesta = UTIL.ConvertKeyValue(films.data, FilmsDTO);
 
    return Responses._200( respuesta );
};


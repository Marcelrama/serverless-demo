const uuid = require('uuid');

const Responses = require('../common/codeResponses');
const Dynamo = require('../common/Dynamo');
const UTIL = require('../common/utils');
const PeopleDTO = require('../Models/PeopleDTO');

const tableName = process.env.tableName;

module.exports.handler = async (event) => {
   
    const body = event.body;
  
    if (!body) { 
      return Responses._400({message: "Invalid request" }); 
    }
    
    if (!body) {
      return Responses._400({message: "Missing parameters" }); 
    }
    
    const id = uuid.v1();
    const res = UTIL.ConvertKeyValue(body, PeopleDTO);
    const people = Object.assign(res, {ID: id});

    const addPeople = await Dynamo.write(people, tableName).catch(err => {
        console.log("err", err)
        return null;
    });
    console.log(addPeople);
    if (!addPeople) {
        return Responses._400({ message: 'Failed to write user by ID' });
    }

    return Responses._200( addPeople );
    
  };
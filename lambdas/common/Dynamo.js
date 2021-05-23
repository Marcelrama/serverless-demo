const AWS = require('aws-sdk');

let options = {};
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  };
}

if (process.env.JEST_WORKER_ID) {
  options = {
    endpoint: 'http://localhost:8000',
    region: 'local-env',
    sslEnabled: false,
  };
}

const documentClient = new AWS.DynamoDB.DocumentClient(options);

const Dynamo = {

  async getAll(TableName) {
    const params = {
      TableName: TableName,
    };
    return await documentClient.scan(params).promise();
  },

  async write(data, TableName) {
 
    if (!data.ID) {
      return Responses._400({ message: 'ID no valido' });
    }

    const params = {
      TableName,
      Item: data,
    };

    const res = await documentClient.put(params).promise();

    if (!res) {
      throw Error(`Error al insertar el registro ${data.ID} in table ${TableName}`);
    }

    return data;
  },
};
module.exports = Dynamo;

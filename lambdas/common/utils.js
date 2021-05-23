const Utils = {
  ConvertKeyValue: (obj, arrayDTO) => {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [arrayDTO.get(key) || key, value]));
  },
  rules: [
    'birth_year:required',
    'eye_color:required',
    'films:required',
    'gender:required',
    'hair_color:required',
    'height:required',
    'homeworld:required',
    'mass:required',
    'name:required',
    'skin_color:required',
    'created:required',
    'edited:required',
    'species:required',
    'starships:required',
    'url:required',
    'vehicles:required',
  ],
  validteFields: (body) => {
    let isvalid = {
      msj: '',
      status: true,
    };
    Object.entries(body).map(([key]) => {
      if (!Utils.rules.includes(`${key}:required`)) {
        isvalid = {
          msj: `el campo ${key} es invalido`,
          status: false,
        };
        return isvalid;
      }
    });
    return isvalid;
  },
};

module.exports = Utils;

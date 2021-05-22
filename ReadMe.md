###  SERVERLESS-DEMO

- Para iniciar el proyecto en modo local.
- `npm install`

- `npm start`

###  Servicios GET obtener por Id peliculas
- [GET](https://nhv1sbfn98.execute-api.us-east-2.amazonaws.com/dev/swapi/films/2 "GET")

###  Servicios GET obtener por Id personas
  - [GET](https://ikiinlpo5c.execute-api.us-east-2.amazonaws.com/dev/swapi/people/2 "GET")

###  Servicios POST Registrar Personas
- El servicio automáticamente convertirá todo de ingles a español.
- [POST](https://ikiinlpo5c.execute-api.us-east-2.amazonaws.com/dev/personas "POST")
- Body :
```json
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "160",
    "homeworld": "https://swapi.py4e.com/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "starships": [
        "https://swapi.py4e.com/api/starships/12/"
    ],
    "url": "https://swapi.py4e.com/api/people/1/",
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/14/"
    ]
}
```
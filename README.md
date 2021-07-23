# Blaise REST Api node client

This library facilitates calling the Blaise REST Api and supports ESM and Common JS. To use
the library you need to do the following:

### Consuming

Add a dependency to your package.json file:
```
"blaise-api-node-client": "ONSdigital/blaise-api-node-client"
```


Add an import statement where you wish to consume the client and interfaces:
```
import BlaiseApiRest, { Instrument } from "blaise-api-node-client";
```

Declare and consume the client by passing the URL of the rest api:
```
const blaiseApiClient = new BlaiseApiClient(`http://${BLAISE_API_URL}`);
```

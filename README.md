# Blaise REST Api node client

This library facilitates calling the Blaise REST Api and supports ESM and Common JS. To use
the library you need to do the following:

### Creating new endpoints

Add new endpoints and tests as required.

Run tests:
```
yarn test
```

Build package:
```
yarn build
```

Git add, commit and push ensuring you've added the build files.

### Consuming

Add a dependency to your package.json file:
```
"blaise-api-node-client": "ONSdigital/blaise-api-node-client"
```


Add an import statement where you wish to consume the client and interfaces:
```
import BlaiseApiRest, { Questionnaire } from "blaise-api-node-client";
```

Declare and consume the client by passing the URL of the rest api:
```
const blaiseApiClient = new BlaiseApiClient(`http://${BLAISE_API_URL}`);
```

Declare timeout for the HTTP client:
```
The client accpets a timeout in milliseconds (timeoutInMs) number parameter if you wish to explicitly set
a timeout for the client. If this parameter is not passed then the default is used.

To specify a timeout you need to instantiate the client as follows, where 1000 is the 
timeout required:

const blaiseApiClient = new BlaiseApiClient(`http://${BLAISE_API_URL}`, 1000);
```

### Mock objects

Mock objects are available for use in tests

```
const {DiagnosticMockObject, QuestionnaireListMockObject, QuestionnaireMockObject} = jest.requireActual("blaise-api-node-client");
```

### Local testing

Install the dependencies

```
yarn
```

Tests can be run via the following package.json script

```
yarn test
```

Linting can be assessed with...

```
yarn lint
```

...and subsequent fixes can be applied with

```
yarn lint-fix
```




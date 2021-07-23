import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import 'regenerator-runtime/runtime'
import BlaiseApiClient from "../src/blaise-api-client";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri"

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);


describe("BlaiseRestapiClient", () => {
  describe("getDiagnostics", () => {
    const diagnosticsJSON = `[
      {
        "health check type": "Connection model",
          "status": "OK"
      },
      {
        "health check type": "Blaise connection",
          "status": "OK"
      },
      {
        "health check type": "Remote data server connection",
          "status": "OK"
      },
      {
        "health check type": "Remote Cati management connection",
          "status": "OK"
      }
    ]`;

    beforeAll(() => {
         mock.onGet(`http://${blaiseApiUrl}/api/v1/health/diagnosis`).reply(200,
        diagnosticsJSON,
      );
    });

    afterAll(() => {
      mock.reset();
    });

    it("returns a list of diagnostics", async () => {
      let diagnostics = await blaiseApiClient.getDiagnostics();

      expect(diagnostics).toHaveLength(4);
      expect(diagnostics[0].status).toEqual("OK");
      expect(diagnostics[0]["health check type"]).toEqual("Connection model");
    });
  });
});

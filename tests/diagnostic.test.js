import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import 'regenerator-runtime/runtime'
import BlaiseApiClient from "../src/blaise-api-client";
import {diagnosticMockOject} from "../mocks/diagnostic-mocks";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri"

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("BlaiseRestapiClient", () => {
  describe("get health Check from API", () => {

    beforeAll(() => {
         mock.onGet(`http://${blaiseApiUrl}/api/v1/health/diagnosis`).reply(200,
        diagnosticMockOject,
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

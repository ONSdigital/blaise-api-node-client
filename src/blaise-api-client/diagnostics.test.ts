import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient from "../blaise-api-client";
import {DiagnosticMockObject} from "../mock-objects/diagnostics.mock.objects";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("BlaiseRestapiClient", () => {
  describe("get health Check from API", () => {

    beforeAll(() => {
         mock.onGet(`http://${blaiseApiUrl}/api/v2/health/diagnosis`).reply(200,
        DiagnosticMockObject,
      );
    });

    afterAll(() => {
      mock.reset();
    });

    it("returns a list of diagnostics", async () => {
      const diagnostics = await blaiseApiClient.getDiagnostics();

      expect(diagnostics).toHaveLength(4);
      expect(diagnostics[0].status).toEqual("OK");
      expect(diagnostics[0]["health check type"]).toEqual("Connection model");
    });
  });
});

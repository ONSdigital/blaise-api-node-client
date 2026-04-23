import { describe, it, expect, beforeAll, afterAll } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BlaiseApiClient from "../blaiseApiClient.js";
import { mockDiagnostics } from "../mocks/diagnostic.mock.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("BlaiseRestapiClient diagnostic functions", () => {
  describe("get health Check from API", () => {
    beforeAll(() => {
      mock.onGet("api/v2/health/diagnosis").reply(200, mockDiagnostics);
    });

    afterAll(() => {
      mock.reset();
    });

    it("returns a list of diagnostics", async () => {
      const diagnostics = await blaiseApiClient.getDiagnostics();

      expect(diagnostics).toHaveLength(4);
      expect(diagnostics[0].status).toEqual("OK");
      expect(diagnostics[0].healthCheckType).toEqual("Connection model");
    });
  });
});

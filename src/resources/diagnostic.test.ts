import MockAdapter from "axios-mock-adapter";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { BlaiseApiClient } from "../blaiseApiClient.js";
import { mockDiagnostics } from "../mocks/diagnostic.mock.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  readonly mock = new MockAdapter(this.httpClient, { onNoMatch: "throwException" });
}

const blaiseApiUrl = "testUri";

const blaiseApiClient = new TestBlaiseApiClient(`http://${blaiseApiUrl}`);
const { mock } = blaiseApiClient;

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

import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient from "../blaiseApiClient";
import { reportMockObject } from "../mockObjects/reportMockObjects";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

const fieldIds = ["qhadmin.hout","allocation.toeditor"];

describe("BlaiseRestapiClient", () => {
  describe("get reporting data from API", () => {

    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const expectedQueryString = `?fieldIds=${fieldIds[0]}&fieldIds=${fieldIds[1]}`;

    beforeAll(() => {
         mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report${expectedQueryString}`).reply(200,
        reportMockObject,
      );
    });

    afterAll(() => {
      mock.reset();
    });

    it("returns an expect report", async () => {
      const reportData = await blaiseApiClient.getReportData(serverpark, questionnaireName, fieldIds);

      expect(reportData).toEqual(reportMockObject);
    });
  });
});

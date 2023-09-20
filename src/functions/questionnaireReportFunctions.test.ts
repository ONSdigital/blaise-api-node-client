import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient from "../blaiseApiClient";
import { reportMockObject } from "../mockObjects/questionnaireReportMockObjects";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("BlaiseRestapiClient", () => {
  describe("get reporting data from API", () => {

    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeAll(() => {
         mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report`).reply(200,
        reportMockObject,
      );
    });

    afterAll(() => {
      mock.reset();
    });

    it("returns an expect report", async () => {
      const reportData = await blaiseApiClient.getQuestionnaireReportData(serverpark, questionnaireName);

      expect(reportData).toEqual(reportMockObject);
    });
  });
});

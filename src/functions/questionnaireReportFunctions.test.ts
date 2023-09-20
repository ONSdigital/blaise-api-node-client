import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient from "../blaiseApiClient";
import { reportMockObject } from "../mockObjects/questionnaireReportMockObjects";

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
<<<<<<< HEAD:src/functions/reportFunctions.test.ts
      const reportData = await blaiseApiClient.getReportData(serverpark, questionnaireName, fieldIds);
=======
      const reportData = await blaiseApiClient.getQuestionnaireReportData(serverpark, questionnaireName);
>>>>>>> 15f64bd3e788116d29aeb3b91e01b6c7324f98b5:src/functions/questionnaireReportFunctions.test.ts

      expect(reportData).toEqual(reportMockObject);
    });
  });
});

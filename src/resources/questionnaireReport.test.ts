import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { BlaiseApiClient } from "../blaiseApiClient.js";
import { mockQuestionnaireReport } from "../mocks/questionnaireReport.mock.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  readonly mock = new MockAdapter(this.httpClient, { onNoMatch: "throwException" });
}

const blaiseApiClient = new TestBlaiseApiClient("http://testUri");
const { mock } = blaiseApiClient;

const fieldIds = ["qhadmin.hout", "allocation.toeditor"];

describe("BlaiseRestapiClient questionnaire report functions", () => {
  describe("get reporting data from API", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";
    const expectedQueryString = `fieldIds=${fieldIds[0]}&fieldIds=${fieldIds[1]}`;

    beforeEach(() => {
      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/report?${expectedQueryString}`,
        )
        .reply(200, mockQuestionnaireReport);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an expected report", async () => {
      const reportData = await blaiseApiClient.getQuestionnaireReportData(
        serverPark,
        questionnaireName,
        fieldIds,
      );

      expect(reportData).toEqual(mockQuestionnaireReport);
    });

    it("encodes reserved characters in field ids", async () => {
      const reservedCharacterFieldIds = ["field/id", "allocation=to&editor"];

      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/report?fieldIds=field%2Fid&fieldIds=allocation%3Dto%26editor`,
        )
        .reply(200, mockQuestionnaireReport);

      const reportData = await blaiseApiClient.getQuestionnaireReportData(
        serverPark,
        questionnaireName,
        reservedCharacterFieldIds,
      );

      expect(reportData).toEqual(mockQuestionnaireReport);
    });
  });
});

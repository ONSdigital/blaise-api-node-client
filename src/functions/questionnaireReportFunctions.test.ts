import { describe, it, expect, beforeEach, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BlaiseApiClient from "../blaiseApiClient.js";
import reportMockObject from "../mockObjects/questionnaireReportMockObjects.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiClient = new BlaiseApiClient("http://testUri");

const fieldIds = ["qhadmin.hout", "allocation.toeditor"];

describe("BlaiseRestapiClient", () => {
  describe("get reporting data from API", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const expectedQueryString = `fieldIds=${fieldIds[0]}&fieldIds=${fieldIds[1]}`;

    beforeEach(() => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report?${expectedQueryString}`,
        )
        .reply(200, reportMockObject);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an expected report", async () => {
      const reportData = await blaiseApiClient.getQuestionnaireReportData(
        serverpark,
        questionnaireName,
        fieldIds,
      );

      expect(reportData).toEqual(reportMockObject);
    });
  });
});

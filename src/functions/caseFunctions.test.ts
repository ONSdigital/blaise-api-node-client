import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient, { CaseStatusListMockObject } from "../blaiseApiClient";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient", () => {
  describe("get case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`).reply(200, {
        caseId: caseId,
        caseData: {}
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a case", async () => {
      const caseResponse = await blaiseApiClient.getCase(serverpark, questionnaireName, caseId);

      expect(caseResponse.caseId).toEqual(caseId);
      expect(caseResponse.caseData).toEqual({});
    });
  });

  describe("add case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`).reply(200, {
        caseId: caseId,
        caseData: {}
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds a case", async () => {
      const caseResponse = await blaiseApiClient.addCase(serverpark, questionnaireName, caseId, {});

      expect(caseResponse.caseId).toEqual(caseId);
      expect(caseResponse.caseData).toEqual({});
    });
  });

  describe("get cases status", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`).reply(200,
        CaseStatusListMockObject
       );
    });

    afterEach(() => {
      mock.reset();
    });

    it("gets all cases and outcome codes for a given questionnaire", async () => {
      const result = await blaiseApiClient.getCaseStatus(serverpark, questionnaireName);

      expect(result).toEqual(CaseStatusListMockObject);
    });
  });
});

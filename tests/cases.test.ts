import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient from "../src/blaise-api-client";
import { Outcome } from "../src/interfaces/cases.interface";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient", () => {
  describe("get case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseID = "100101;";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseID}`).reply(200, {
        caseID: caseID,
        fieldData: {}
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a case", async () => {
      const caseResponse = await blaiseApiClient.getCase(serverpark, questionnaireName, caseID);

      expect(caseResponse.caseID).toEqual(caseID);
      expect(caseResponse.fieldData).toEqual({});
    });
  });

  describe("add case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseID = "100101;";

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseID}`).reply(200, {
        caseID: caseID,
        fieldData: {}
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds a case", async () => {
      const caseResponse = await blaiseApiClient.addCase(serverpark, questionnaireName, caseID, {});

      expect(caseResponse.caseID).toEqual(caseID);
      expect(caseResponse.fieldData).toEqual({});
    });
  });

  describe("get cases status", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`).reply(200,
        [
          {
            "primaryKey": "1",
            "outcome": 110
          },
          {
            "primaryKey": "2",
            "outcome": 310
          },
          {
            "primaryKey": "3",
            "outcome": 0
          }
        ]
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("gets all cases and outcome codes for a given questionnaire", async () => {
      const result = await blaiseApiClient.getCaseStatus(serverpark, questionnaireName);

      expect(result).toHaveLength(3);
      expect(result[0].primaryKey).toEqual("1");
      expect(result[0].outcome).toEqual(110);
      expect(result[0].outcome).toEqual(Outcome.Completed);
      expect(result[1].primaryKey).toEqual("2");
      expect(result[1].outcome).toEqual(Outcome.NonContact);
      expect(result[2].primaryKey).toEqual("3");
      expect(result[2].outcome).toEqual(Outcome.None);
    });

  });
});

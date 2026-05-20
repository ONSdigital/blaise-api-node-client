import MockAdapter from "axios-mock-adapter";
import { afterEach, describe, expect, it } from "vitest";

import { BlaiseApiClient } from "../blaiseApiClient.js";
import {
  mockInstallQuestionnaire,
  mockInstallQuestionnaireResponse,
  mockQuestionnaire,
  mockQuestionnaires,
  mockQuestionnaireSettings,
} from "../mocks/questionnaire.mock.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  readonly mock = new MockAdapter(this.httpClient, { onNoMatch: "throwException" });
}

const blaiseApiClient = new TestBlaiseApiClient("http://testUri");
const { mock } = blaiseApiClient;

describe("blaiseApiClient questionnaire functions", () => {
  afterEach(() => {
    mock.reset();
  });

  describe("get all questionnaires with Cati data", () => {
    it("returns a list of all questionnaires including CATI data", async () => {
      mock.onGet("api/v2/cati/questionnaires").reply(200, mockQuestionnaires);
      const questionnaires = await blaiseApiClient.getAllQuestionnairesWithCatiData();

      expect(questionnaires).toEqual(mockQuestionnaires);
    });
  });

  describe("get questionnaires with Cati data", () => {
    const serverPark = "test";

    it("returns a list of all questionnaires including CATI data within a serverpark", async () => {
      mock
        .onGet(`api/v2/cati/serverparks/${serverPark}/questionnaires`)
        .reply(200, mockQuestionnaires);
      const questionnaires = await blaiseApiClient.getQuestionnairesWithCatiData(serverPark);

      expect(questionnaires).toEqual(mockQuestionnaires);
    });
  });

  describe("get questionnaire with Cati data", () => {
    const serverPark = "test";

    it("returns an questionnaire including CATI data", async () => {
      mock
        .onGet(`api/v2/cati/serverparks/${serverPark}/questionnaires/${mockQuestionnaire.name}`)
        .reply(200, mockQuestionnaire);
      const questionnaire = await blaiseApiClient.getQuestionnaireWithCatiData(
        serverPark,
        mockQuestionnaire.name,
      );

      expect(questionnaire).toEqual(mockQuestionnaire);
    });
  });

  describe("get questionnaires", () => {
    const serverPark = "test";

    it("returns a list of questionnaires in a serverpark", async () => {
      mock.onGet(`api/v2/serverparks/${serverPark}/questionnaires`).reply(200, mockQuestionnaires);
      const questionnaires = await blaiseApiClient.getQuestionnaires(serverPark);

      expect(questionnaires).toEqual(mockQuestionnaires);
    });
  });

  describe("get questionnaire", () => {
    const serverPark = "test";

    it("returns a questionnaire", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverPark}/questionnaires/${mockQuestionnaire.name}`)
        .reply(200, mockQuestionnaire);
      const questionnaire = await blaiseApiClient.getQuestionnaire(
        serverPark,
        mockQuestionnaire.name,
      );

      expect(questionnaire).toEqual(mockQuestionnaire);
    });
  });

  describe("get whether questionnaire exists", () => {
    const serverPark = "test";
    const questionnaireInstalled = "OPN2101A";
    const questionnaireNotInstalled = "OPN2102B";

    it("returns true if it exists", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverPark}/questionnaires/${questionnaireInstalled}/exists`)
        .reply(200, true);
      const exists = await blaiseApiClient.questionnaireExists(serverPark, questionnaireInstalled);

      expect(exists).toEqual(true);
    });

    it("returns false if it does not exist", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${questionnaireNotInstalled}/exists`,
        )
        .reply(200, false);
      const exists = await blaiseApiClient.questionnaireExists(
        serverPark,
        questionnaireNotInstalled,
      );

      expect(exists).toEqual(false);
    });
  });

  describe("get whether questionnaire has mode", () => {
    const serverPark = "test";
    const hasMode = "CATI";
    const doesntHaveMode = "WEB";

    it("returns true if questionnaire has mode", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${mockQuestionnaire.name}/modes/${hasMode}`,
        )
        .reply(200, true);
      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(
        serverPark,
        mockQuestionnaire.name,
        hasMode,
      );

      expect(exists).toEqual(true);
    });

    it("returns false if questionnaire does not have mode", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${mockQuestionnaire.name}/modes/${doesntHaveMode}`,
        )
        .reply(200, false);
      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(
        serverPark,
        mockQuestionnaire.name,
        doesntHaveMode,
      );

      expect(exists).toEqual(false);
    });

    it("encodes reserved characters in mode values", async () => {
      const questionnaireName = "OPN/2101A";
      const mode = "CATI/WEB?preview=true";

      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${encodeURIComponent(questionnaireName)}/modes/${encodeURIComponent(mode)}`,
        )
        .reply(200, true);

      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(
        serverPark,
        questionnaireName,
        mode,
      );

      expect(exists).toEqual(true);
    });
  });

  describe("install questionnaire", () => {
    const serverPark = "test";

    it("installs an questionnaire and returns the questionnaire file", async () => {
      mock
        .onPost(`api/v2/serverparks/${serverPark}/questionnaires`)
        .reply(201, mockInstallQuestionnaireResponse);
      const questionnaire = await blaiseApiClient.installQuestionnaire(
        serverPark,
        mockInstallQuestionnaire,
      );

      expect(questionnaire).toEqual(mockInstallQuestionnaireResponse);
    });
  });

  describe("delete questionnaire", () => {
    const serverPark = "test";
    const questionnaireName = "OPN2004A";

    it("deletes an questionnaire", async () => {
      mock
        .onDelete(
          `api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}?name=${questionnaireName}`,
        )
        .reply(204, null);
      const result = await blaiseApiClient.deleteQuestionnaire(serverPark, questionnaireName);

      expect(result).toBeNull();
    });

    it("encodes reserved characters in questionnaire names", async () => {
      const reservedCharacterQuestionnaireName = "OPN/2004A?preview=true";
      const encodedQuestionnaireName = encodeURIComponent(reservedCharacterQuestionnaireName);
      const encodedQueryString = new URLSearchParams({
        name: reservedCharacterQuestionnaireName,
      }).toString();

      mock
        .onDelete(
          `api/v2/serverparks/${serverPark}/questionnaires/${encodedQuestionnaireName}?${encodedQueryString}`,
        )
        .reply(204, null);

      const result = await blaiseApiClient.deleteQuestionnaire(
        serverPark,
        reservedCharacterQuestionnaireName,
      );

      expect(result).toBeNull();
    });
  });

  describe("get a list of case ids for in questionnaire", () => {
    const serverPark = "test";
    const questionnaireInstalled = "OPN2101A";
    const expectedCaseIds = ["100002", "100003"];

    it("returns expected list of ids", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverPark}/questionnaires/${questionnaireInstalled}/cases/ids`,
        )
        .reply(200, expectedCaseIds);
      const caseIds = await blaiseApiClient.getQuestionnaireCaseIds(
        serverPark,
        questionnaireInstalled,
      );

      expect(caseIds).toEqual(expectedCaseIds);
    });
  });

  describe("get questionnaire modes", () => {
    const serverPark = "test";

    it("returns list of modes for questionnaire", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverPark}/questionnaires/${mockQuestionnaire.name}/modes`)
        .reply(200, ["CATI", "CAWI"]);
      const modes = await blaiseApiClient.getQuestionnaireModes(serverPark, mockQuestionnaire.name);

      expect(modes).toContain("CATI");
      expect(modes).toContain("CAWI");
    });
  });

  describe("get questionnaire settings", () => {
    const serverPark = "test";

    it("returns list of settings for questionnaire", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverPark}/questionnaires/${mockQuestionnaire.name}/settings`)
        .reply(200, mockQuestionnaireSettings);
      const settings = await blaiseApiClient.getQuestionnaireSettings(
        serverPark,
        mockQuestionnaire.name,
      );

      expect(settings).toEqual(mockQuestionnaireSettings);
    });
  });

  describe("activate questionnaire", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    it("activates an questionnaire", async () => {
      mock
        .onPatch(`api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/activate`)
        .reply(204, null);
      const result = await blaiseApiClient.activateQuestionnaire(serverPark, questionnaireName);

      expect(result).toBeNull();
    });
  });

  describe("deactivate questionnaire", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    it("deactivates an questionnaire", async () => {
      mock
        .onPatch(`api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/deactivate`)
        .reply(204, null);
      const result = await blaiseApiClient.deactivateQuestionnaire(serverPark, questionnaireName);

      expect(result).toBeNull();
    });
  });
});

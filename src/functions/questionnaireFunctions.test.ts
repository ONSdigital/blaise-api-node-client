import { describe, it, expect, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BlaiseApiClient, {
  QuestionnaireListMockObject,
  QuestionnaireMockObject,
  InstallQuestionnaireMockObject,
  InstallQuestionnaireResponseMockObject,
  QuestionnaireSettingsMockList,
} from "../blaiseApiClient.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiClient = new BlaiseApiClient("http://testUri");

describe("blaiseApiClient", () => {
  afterEach(() => {
    mock.reset();
  });

  describe("get all questionnaires with Cati data", () => {
    it("returns a list of all questionnaires including CATI data", async () => {
      mock.onGet("api/v2/cati/questionnaires").reply(200, QuestionnaireListMockObject);
      const questionnaires = await blaiseApiClient.getAllQuestionnairesWithCatiData();

      expect(questionnaires).toEqual(QuestionnaireListMockObject);
    });
  });

  describe("get questionnaires with Cati data", () => {
    const serverpark = "test";

    it("returns a list of all questionnaires including CATI data within a serverpark", async () => {
      mock
        .onGet(`api/v2/cati/serverparks/${serverpark}/questionnaires`)
        .reply(200, QuestionnaireListMockObject);
      const questionnaires = await blaiseApiClient.getQuestionnairesWithCatiData(serverpark);

      expect(questionnaires).toEqual(QuestionnaireListMockObject);
    });
  });

  describe("get questionnaire with Cati data", () => {
    const serverpark = "test";

    it("returns an questionnaire including CATI data", async () => {
      mock
        .onGet(
          `api/v2/cati/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}`,
        )
        .reply(200, QuestionnaireMockObject);
      const questionnaire = await blaiseApiClient.getQuestionnaireWithCatiData(
        serverpark,
        QuestionnaireMockObject.name,
      );

      expect(questionnaire).toEqual(QuestionnaireMockObject);
    });
  });

  describe("get questionnaires", () => {
    const serverpark = "test";

    it("returns a list of questionnaires in a serverpark", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverpark}/questionnaires`)
        .reply(200, QuestionnaireListMockObject);
      const questionnaires = await blaiseApiClient.getQuestionnaires(serverpark);

      expect(questionnaires).toEqual(QuestionnaireListMockObject);
    });
  });

  describe("get questionnaire", () => {
    const serverpark = "test";

    it("returns a questionnaire", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}`)
        .reply(200, QuestionnaireMockObject);
      const questionnaire = await blaiseApiClient.getQuestionnaire(
        serverpark,
        QuestionnaireMockObject.name,
      );

      expect(questionnaire).toEqual(QuestionnaireMockObject);
    });
  });

  describe("get whether questionnaire exists", () => {
    const serverpark = "test";
    const questionnaireInstalled = "OPN2101A";
    const questionnaireNotInstalled = "OPN2102B";

    it("returns true if it exists", async () => {
      mock
        .onGet(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireInstalled}/exists`)
        .reply(200, true);
      const exists = await blaiseApiClient.questionnaireExists(serverpark, questionnaireInstalled);

      expect(exists).toEqual(true);
    });

    it("returns false if it does not exist", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${questionnaireNotInstalled}/exists`,
        )
        .reply(200, false);
      const exists = await blaiseApiClient.questionnaireExists(
        serverpark,
        questionnaireNotInstalled,
      );

      expect(exists).toEqual(false);
    });
  });

  describe("get whether questionnaire has mode", () => {
    const serverpark = "test";
    const hasMode = "CATI";
    const doesntHaveMode = "WEB";

    it("returns true if questionnaire has mode", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/modes/${hasMode}`,
        )
        .reply(200, true);
      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(
        serverpark,
        QuestionnaireMockObject.name,
        hasMode,
      );

      expect(exists).toEqual(true);
    });

    it("returns false if questionnaire does not have mode", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/modes/${doesntHaveMode}`,
        )
        .reply(200, false);
      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(
        serverpark,
        QuestionnaireMockObject.name,
        doesntHaveMode,
      );

      expect(exists).toEqual(false);
    });
  });

  describe("install questionnaire", () => {
    const serverpark = "test";

    it("installs an questionnaire and returns the questionnaire file", async () => {
      mock
        .onPost(`api/v2/serverparks/${serverpark}/questionnaires`)
        .reply(201, InstallQuestionnaireResponseMockObject);
      const questionnaire = await blaiseApiClient.installQuestionnaire(
        serverpark,
        InstallQuestionnaireMockObject,
      );

      expect(questionnaire).toEqual(InstallQuestionnaireResponseMockObject);
    });
  });

  describe("delete questionnaire", () => {
    const serverpark = "test";
    const questionnaireName = "OPN2004A";

    it("deletes an questionnaire", async () => {
      mock
        .onDelete(
          `api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}?name=${questionnaireName}`,
        )
        .reply(204, null);
      const result = await blaiseApiClient.deleteQuestionnaire(serverpark, questionnaireName);

      expect(result).toBeNull();
    });
  });

  describe("get a list of case ids for in questionnaire", () => {
    const serverpark = "test";
    const questionnaireInstalled = "OPN2101A";
    const expectedCaseIds = ["100002", "100003"];

    it("returns expected list of ids", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${questionnaireInstalled}/cases/ids`,
        )
        .reply(200, expectedCaseIds);
      const caseIds = await blaiseApiClient.getQuestionnaireCaseIds(
        serverpark,
        questionnaireInstalled,
      );

      expect(caseIds).toEqual(expectedCaseIds);
    });
  });

  describe("get questionnaire modes", () => {
    const serverpark = "test";

    it("returns list of modes for questionnaire", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/modes`,
        )
        .reply(200, ["CATI", "CAWI"]);
      const modes = await blaiseApiClient.getQuestionnaireModes(
        serverpark,
        QuestionnaireMockObject.name,
      );

      expect(modes).toContain("CATI");
      expect(modes).toContain("CAWI");
    });
  });

  describe("get questionnaire settings", () => {
    const serverpark = "test";

    it("returns list of settings for questionnaire", async () => {
      mock
        .onGet(
          `api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/settings`,
        )
        .reply(200, QuestionnaireSettingsMockList);
      const settings = await blaiseApiClient.getQuestionnaireSettings(
        serverpark,
        QuestionnaireMockObject.name,
      );

      expect(settings).toEqual(QuestionnaireSettingsMockList);
    });
  });

  describe("activate questionnaire", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    it("activates an questionnaire", async () => {
      mock
        .onPatch(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/activate`)
        .reply(204, null);
      const result = await blaiseApiClient.activateQuestionnaire(serverpark, questionnaireName);

      expect(result).toBeNull();
    });
  });

  describe("deactivate questionnaire", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    it("deactivates an questionnaire", async () => {
      mock
        .onPatch(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/deactivate`)
        .reply(204, null);
      const result = await blaiseApiClient.deactivateQuestionnaire(serverpark, questionnaireName);

      expect(result).toBeNull();
    });
  });
});

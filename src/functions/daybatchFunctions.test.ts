import { describe, it, expect, beforeEach, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BlaiseApiClient, {
  QuestionnaireDaybatchCasesMock,
  AddDaybatchMock,
  SurveyDaysMock,
  SurveyDaysDatesMock,
} from "../blaiseApiClient.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient", () => {
  const basePath = "api/v2/cati/serverparks";

  describe("get daybatch", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/daybatch`)
        .reply(200, QuestionnaireDaybatchCasesMock);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of case IDs in the current daybatch", async () => {
      const daybatch = await blaiseApiClient.getDaybatch(serverpark, questionnaireName);

      expect(daybatch).toEqual(QuestionnaireDaybatchCasesMock);
    });
  });

  describe("add daybatch", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onPost(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/daybatch`)
        .reply(201, QuestionnaireDaybatchCasesMock);
    });

    afterEach(() => {
      mock.reset();
    });

    it("installs a questionnaire and returns the questionnaire file", async () => {
      const daybatch = await blaiseApiClient.addDaybatch(
        serverpark,
        questionnaireName,
        AddDaybatchMock,
      );

      expect(daybatch).toEqual(QuestionnaireDaybatchCasesMock);
    });
  });

  describe("get survey days", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/surveydays`)
        .reply(200, SurveyDaysMock);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of surveydays", async () => {
      const surveyDays = await blaiseApiClient.getSurveyDays(serverpark, questionnaireName);

      expect(surveyDays).toEqual(SurveyDaysMock);
    });
  });

  describe("add survey days", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onPost(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/surveydays`)
        .reply(201, SurveyDaysMock);
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds surveydays by strings", async () => {
      const surveyDays = await blaiseApiClient.addSurveyDays(
        serverpark,
        questionnaireName,
        SurveyDaysMock,
      );

      expect(surveyDays).toEqual(SurveyDaysMock);
    });

    it("adds surveydays by dates", async () => {
      const surveyDays = await blaiseApiClient.addSurveyDays(
        serverpark,
        questionnaireName,
        SurveyDaysDatesMock,
      );

      expect(surveyDays).toEqual(SurveyDaysMock);
    });
  });
});

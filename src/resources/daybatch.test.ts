import { describe, it, expect, beforeEach, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BlaiseApiClient from "../blaiseApiClient.js";
import {
  mockDaybatchCases,
  mockAddDaybatchSettings,
  mockSurveyDays,
  mockSurveyDayDates,
} from "../mocks/daybatch.mock.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient daybatch functions", () => {
  const basePath = "api/v2/cati/serverparks";

  describe("get daybatch", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/daybatch`)
        .reply(200, mockDaybatchCases);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of case IDs in the current daybatch", async () => {
      const daybatch = await blaiseApiClient.getDaybatch(serverpark, questionnaireName);

      expect(daybatch).toEqual(mockDaybatchCases);
    });
  });

  describe("add daybatch", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onPost(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/daybatch`)
        .reply(201, mockDaybatchCases);
    });

    afterEach(() => {
      mock.reset();
    });

    it("installs a questionnaire and returns the questionnaire file", async () => {
      const daybatch = await blaiseApiClient.addDaybatch(
        serverpark,
        questionnaireName,
        mockAddDaybatchSettings,
      );

      expect(daybatch).toEqual(mockDaybatchCases);
    });
  });

  describe("get survey days", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/surveydays`)
        .reply(200, mockSurveyDays);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of surveydays", async () => {
      const surveyDays = await blaiseApiClient.getSurveyDays(serverpark, questionnaireName);

      expect(surveyDays).toEqual(mockSurveyDays);
    });
  });

  describe("add survey days", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onPost(`${basePath}/${serverpark}/questionnaires/${questionnaireName}/surveydays`)
        .reply(201, mockSurveyDays);
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds surveydays by strings", async () => {
      const surveyDays = await blaiseApiClient.addSurveyDays(
        serverpark,
        questionnaireName,
        mockSurveyDays,
      );

      expect(surveyDays).toEqual(mockSurveyDays);
    });

    it("adds surveydays by dates", async () => {
      const surveyDays = await blaiseApiClient.addSurveyDays(
        serverpark,
        questionnaireName,
        mockSurveyDayDates,
      );

      expect(surveyDays).toEqual(mockSurveyDays);
    });
  });
});

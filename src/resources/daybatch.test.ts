import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { BlaiseApiClient } from "../blaiseApiClient.js";
import {
  mockAddDaybatchSettings,
  mockDaybatch,
  mockSurveyDayDates,
  mockSurveyDays,
} from "../mocks/daybatch.mock.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  readonly mock = new MockAdapter(this.httpClient, { onNoMatch: "throwException" });
}

const blaiseApiUrl = "testUri";

const blaiseApiClient = new TestBlaiseApiClient(`http://${blaiseApiUrl}`);
const { mock } = blaiseApiClient;

describe("blaiseApiClient daybatch functions", () => {
  const basePath = "api/v2/cati/serverparks";

  describe("get daybatch", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`${basePath}/${serverPark}/questionnaires/${questionnaireName}/daybatch`)
        .reply(200, mockDaybatch);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of case IDs in the current daybatch", async () => {
      const daybatch = await blaiseApiClient.getDaybatch(serverPark, questionnaireName);

      expect(daybatch).toEqual(mockDaybatch);
    });
  });

  describe("add daybatch", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onPost(`${basePath}/${serverPark}/questionnaires/${questionnaireName}/daybatch`)
        .reply(201, mockDaybatch);
    });

    afterEach(() => {
      mock.reset();
    });

    it("installs a questionnaire and returns the questionnaire file", async () => {
      const daybatch = await blaiseApiClient.addDaybatch(
        serverPark,
        questionnaireName,
        mockAddDaybatchSettings,
      );

      expect(daybatch).toEqual(mockDaybatch);
    });
  });

  describe("get survey days", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`${basePath}/${serverPark}/questionnaires/${questionnaireName}/surveydays`)
        .reply(200, mockSurveyDays);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of surveydays", async () => {
      const surveyDays = await blaiseApiClient.getSurveyDays(serverPark, questionnaireName);

      expect(surveyDays).toEqual(mockSurveyDays);
    });
  });

  describe("add survey days", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onPost(`${basePath}/${serverPark}/questionnaires/${questionnaireName}/surveydays`)
        .reply(201, mockSurveyDays);
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds surveydays by strings", async () => {
      const surveyDays = await blaiseApiClient.addSurveyDays(
        serverPark,
        questionnaireName,
        mockSurveyDays,
      );

      expect(surveyDays).toEqual(mockSurveyDays);
    });

    it("adds surveydays by dates", async () => {
      const surveyDays = await blaiseApiClient.addSurveyDays(
        serverPark,
        questionnaireName,
        mockSurveyDayDates,
      );

      expect(surveyDays).toEqual(mockSurveyDays);
    });
  });
});

import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { BlaiseApiClient } from "../blaiseApiClient.js";
import { mockCaseEditInformationRecords, mockCaseStatuses } from "../mocks/case.mock.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  readonly mock = new MockAdapter(this.httpClient, { onNoMatch: "throwException" });
}

const blaiseApiUrl = "testUri";

const blaiseApiClient = new TestBlaiseApiClient(`http://${blaiseApiUrl}`);
const { mock } = blaiseApiClient;

const multikeyQueryString = "keyNames=key1&keyNames=key2&keyValues=value1&keyValues=value2";

describe("blaiseApiClient case functions", () => {
  describe("get case", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const encodedCaseId = encodeURIComponent(caseId);

    beforeEach(() => {
      mock
        .onGet(
          `/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/${encodedCaseId}`,
        )
        .reply(200, {
          caseId,
          fieldData: {},
        });
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a case", async () => {
      const caseResponse = await blaiseApiClient.getCase(serverPark, questionnaireName, caseId);

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("get case multikey", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const keyValueMap = new Map<string, string>([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);

    beforeEach(() => {
      mock
        .onGet(
          `/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/multikey?${multikeyQueryString}`,
        )
        .reply(200, { caseId, fieldData: {} });
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a case", async () => {
      const caseResponse = await blaiseApiClient.getCaseMultikey(
        serverPark,
        questionnaireName,
        keyValueMap,
      );

      expect(caseResponse.caseId).toEqual(caseId);
    });

    it("encodes reserved characters in multikey query values", async () => {
      const reservedCharactersKeyValueMap = new Map<string, string>([
        ["serial/id", "name=value&two"],
      ]);

      mock
        .onGet(
          `/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/multikey?keyNames=serial%2Fid&keyValues=name%3Dvalue%26two`,
        )
        .reply(200, { caseId, fieldData: {} });

      const caseResponse = await blaiseApiClient.getCaseMultikey(
        serverPark,
        questionnaireName,
        reservedCharactersKeyValueMap,
      );

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("add case", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const encodedCaseId = encodeURIComponent(caseId);

    beforeEach(() => {
      mock
        .onPost(
          `/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/${encodedCaseId}`,
        )
        .reply(200, { caseId, fieldData: {} });
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds a case", async () => {
      const caseResponse = await blaiseApiClient.addCase(serverPark, questionnaireName, caseId, {});

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("update case", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const encodedCaseId = encodeURIComponent(caseId);

    beforeEach(() => {
      mock
        .onPatch(
          `/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/${encodedCaseId}`,
        )
        .reply(204, null);
    });

    afterEach(() => {
      mock.reset();
    });

    it("updates a case", async () => {
      const result = await blaiseApiClient.updateCase(serverPark, questionnaireName, caseId, {});

      expect(result).toBeNull();
    });
  });

  describe("add case multikey", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const keyValueMap = new Map<string, string>([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);

    beforeEach(() => {
      mock
        .onPost(
          `/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/multikey?${multikeyQueryString}`,
        )
        .reply(200, { caseId, fieldData: {} });
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds a case with multiple keys", async () => {
      const caseResponse = await blaiseApiClient.addCaseMultikey(
        serverPark,
        questionnaireName,
        keyValueMap,
        {},
      );

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("get cases status", () => {
    const serverPark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/status`)
        .reply(200, mockCaseStatuses);
    });

    afterEach(() => {
      mock.reset();
    });

    it("gets all cases and outcome codes", async () => {
      const result = await blaiseApiClient.getCaseStatus(serverPark, questionnaireName);

      expect(result).toEqual(mockCaseStatuses);
    });
  });

  describe("get case edit information", () => {
    const serverPark = "test";
    const questionnaireName = "FRS2108A";

    beforeEach(() => {
      mock
        .onGet(`/api/v2/serverparks/${serverPark}/questionnaires/${questionnaireName}/cases/edit`)
        .reply(200, mockCaseEditInformationRecords);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns editing details for a case", async () => {
      const response = await blaiseApiClient.getCaseEditInformation(serverPark, questionnaireName);

      expect(response).toEqual(mockCaseEditInformationRecords);
    });
  });
});

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import BlaiseApiClient, {
  CaseEditInformationListMockObject,
  CaseStatusListMockObject,
} from "../blaiseApiClient.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient", () => {
  describe("get case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";

    beforeEach(() => {
      mock
        .onGet(
          `/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`,
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
      const caseResponse = await blaiseApiClient.getCase(serverpark, questionnaireName, caseId);

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("get case multikey", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const keyValueMap = new Map<string, string>([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);
    const queryString = blaiseApiClient.getMultikeyQueryString(keyValueMap);

    beforeEach(() => {
      mock
        .onGet(
          `/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/multikey?${queryString}`,
        )
        .reply(200, { caseId, fieldData: {} });
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a case", async () => {
      const caseResponse = await blaiseApiClient.getCaseMultikey(
        serverpark,
        questionnaireName,
        keyValueMap,
      );

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("add case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";

    beforeEach(() => {
      mock
        .onPost(
          `/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`,
        )
        .reply(200, { caseId, fieldData: {} });
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds a case", async () => {
      const caseResponse = await blaiseApiClient.addCase(serverpark, questionnaireName, caseId, {});

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("update case", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";

    beforeEach(() => {
      mock
        .onPatch(
          `/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`,
        )
        .reply(204, null);
    });

    afterEach(() => {
      mock.reset();
    });

    it("updates a case", async () => {
      const result = await blaiseApiClient.updateCase(serverpark, questionnaireName, caseId, {});

      expect(result).toBeNull();
    });
  });

  describe("add case multikey", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";
    const caseId = "100101;";
    const keyValueMap = new Map<string, string>([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);
    const queryString = blaiseApiClient.getMultikeyQueryString(keyValueMap);

    beforeEach(() => {
      mock
        .onPost(
          `/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/multikey?${queryString}`,
        )
        .reply(200, { caseId, fieldData: {} });
    });

    afterEach(() => {
      mock.reset();
    });

    it("adds a case with multiple keys", async () => {
      const caseResponse = await blaiseApiClient.addCaseMultikey(
        serverpark,
        questionnaireName,
        keyValueMap,
        {},
      );

      expect(caseResponse.caseId).toEqual(caseId);
    });
  });

  describe("get cases status", () => {
    const serverpark = "test";
    const questionnaireName = "dst2108t";

    beforeEach(() => {
      mock
        .onGet(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`)
        .reply(200, CaseStatusListMockObject);
    });

    afterEach(() => {
      mock.reset();
    });

    it("gets all cases and outcome codes", async () => {
      const result = await blaiseApiClient.getCaseStatus(serverpark, questionnaireName);

      expect(result).toEqual(CaseStatusListMockObject);
    });
  });

  describe("get case edit information", () => {
    const serverpark = "test";
    const questionnaireName = "FRS2108A";

    beforeEach(() => {
      mock
        .onGet(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/edit`)
        .reply(200, CaseEditInformationListMockObject);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns editing details for a case", async () => {
      const response = await blaiseApiClient.getCaseEditInformation(serverpark, questionnaireName);

      expect(response).toEqual(CaseEditInformationListMockObject);
    });
  });
});

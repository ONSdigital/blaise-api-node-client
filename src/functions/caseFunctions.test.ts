import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import BlaiseApiClient, { CaseEditInformationListMockObject, CaseStatusListMockObject } from '../blaiseApiClient';

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' });
const blaiseApiUrl = 'testUri';

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe('blaiseApiClient', () => {
  describe('get case', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';
    const caseId = '100101;';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`).reply(200, {
        caseId,
        fieldData: {},
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns a case', async () => {
      const caseResponse = await blaiseApiClient.getCase(serverpark, questionnaireName, caseId);

      expect(caseResponse.caseId).toEqual(caseId);
      expect(caseResponse.fieldData).toEqual({});
    });
  });

  describe('get case multikey', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';
    const caseId = '100101;';
    const keyValueMap = new Map<string, string>();
    keyValueMap.set('key1', 'value1');
    keyValueMap.set('key2', 'value2');
    const queryString = blaiseApiClient.getMultikeyQueryString(keyValueMap);

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/multikey?${queryString}`).reply(200, {
        caseId,
        fieldData: {},
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns a case', async () => {
      const caseResponse = await blaiseApiClient.getCaseMultikey(serverpark, questionnaireName, keyValueMap);

      expect(caseResponse.caseId).toEqual(caseId);
      expect(caseResponse.fieldData).toEqual({});
    });
  });

  describe('add case', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';
    const caseId = '100101;';

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`).reply(200, {
        caseId,
        fieldData: {},
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it('adds a case', async () => {
      const caseResponse = await blaiseApiClient.addCase(serverpark, questionnaireName, caseId, {});

      expect(caseResponse.caseId).toEqual(caseId);
      expect(caseResponse.fieldData).toEqual({});
    });
  });

  describe('update case', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';
    const caseId = '100101;';

    beforeEach(() => {
      mock.onPatch(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`).reply(204, null);
    });

    afterEach(() => {
      mock.reset();
    });

    it('updates a case', async () => {
      const result = await blaiseApiClient.updateCase(serverpark, questionnaireName, caseId, {});

      expect(result).toBeNull();
    });
  });

  describe('add case multikey', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';
    const caseId = '100101;';
    const keyValueMap = new Map<string, string>();
    keyValueMap.set('key1', 'value1');
    keyValueMap.set('key2', 'value2');
    const queryString = blaiseApiClient.getMultikeyQueryString(keyValueMap);

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/multikey?${queryString}`).reply(200, {
        caseId,
        fieldData: {},
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it('adds a case with multiple keys', async () => {
      const caseResponse = await blaiseApiClient.addCaseMultikey(serverpark, questionnaireName, keyValueMap, {});

      expect(caseResponse.caseId).toEqual(caseId);
      expect(caseResponse.fieldData).toEqual({});
    });
  });

  describe('get cases status', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`).reply(
        200,
        CaseStatusListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('gets all cases and outcome codes for a given questionnaire', async () => {
      const result = await blaiseApiClient.getCaseStatus(serverpark, questionnaireName);

      expect(result).toEqual(CaseStatusListMockObject);
    });
  });

  describe('get case edit information', () => {
    const serverpark = 'test';
    const questionnaireName = 'FRS2108A';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/edit`).reply(
        200,
        CaseEditInformationListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns editing details for a case', async () => {
      const editingDetailsListResponse = await blaiseApiClient.getCaseEditInformation(serverpark, questionnaireName);

      editingDetailsListResponse.forEach((editingDetailsResponse, index) => {
        expect(editingDetailsResponse.primaryKey).toEqual(CaseEditInformationListMockObject[index].primaryKey);
        expect(editingDetailsResponse.outcome).toEqual(CaseEditInformationListMockObject[index].outcome);
        expect(editingDetailsResponse.assignedTo).toEqual(CaseEditInformationListMockObject[index].assignedTo);
        expect(editingDetailsResponse.editedStatus).toEqual(CaseEditInformationListMockObject[index].editedStatus);
        expect(editingDetailsResponse.interviewer).toEqual(CaseEditInformationListMockObject[index].interviewer);
        expect(editingDetailsResponse.editUrl).toEqual('');
        expect(editingDetailsResponse.readOnlyUrl).toEqual('');
      });
    });
  });
});

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import BlaiseApiClient, { EditingDetailsListMockObject } from '../blaiseApiClient';

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' });
const blaiseApiUrl = 'testUri';

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe('blaiseApiClient', () => {
  describe('get case', () => {
    const serverpark = 'test';
    const questionnaireName = 'FRS2108A';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/editing`).reply(
        200,
        EditingDetailsListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns editing details for a case', async () => {
      const editingDetailsListResponse = await blaiseApiClient.getEditingDetails(serverpark, questionnaireName);

      editingDetailsListResponse.forEach((editingDetailsResponse, index) => {
        expect(editingDetailsResponse.primaryKey).toEqual(EditingDetailsListMockObject[index].primaryKey);
        expect(editingDetailsResponse.outcome).toEqual(EditingDetailsListMockObject[index].outcome);
        expect(editingDetailsResponse.assignedTo).toEqual(EditingDetailsListMockObject[index].assignedTo);
        expect(editingDetailsResponse.editedStatus).toEqual(EditingDetailsListMockObject[index].editedStatus);
        expect(editingDetailsResponse.interviewer).toEqual(EditingDetailsListMockObject[index].interviewer);
      });
    });
  });
});

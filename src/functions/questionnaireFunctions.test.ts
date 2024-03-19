import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import BlaiseApiClient, {
  QuestionnaireListMockObject,
  QuestionnaireMockObject,
  InstallQuestionnaireMockObject,
  InstallQuestionnaireResponseMockObject, QuestionnaireSettingsMockList,
} from '../blaiseApiClient';

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' });
const blaiseApiUrl = 'testUri';

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe('blaiseApiClient', () => {
  describe('get all questionnaires with Cati data', () => {
    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/cati/questionnaires`).reply(
        200,
        QuestionnaireListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns a list of all questionnaires including CATI data', async () => {
      const questionnaires = await blaiseApiClient.getAllQuestionnairesWithCatiData();

      expect(questionnaires).toEqual(QuestionnaireListMockObject);
    });
  });

  describe('get questionnaires with Cati data', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/cati/serverparks/${serverpark}/questionnaires`).reply(
        200,
        QuestionnaireListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns a list of all questionnaires including CATI data within a serverpark', async () => {
      const questionnaires = await blaiseApiClient.getQuestionnairesWithCatiData(serverpark);

      expect(questionnaires).toEqual(QuestionnaireListMockObject);
    });
  });

  describe('get questionnaire with Cati data', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/cati/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}`).reply(
        200,
        QuestionnaireMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns an questionnaire including CATI data', async () => {
      const questionnaire = await blaiseApiClient.getQuestionnaireWithCatiData(serverpark, QuestionnaireMockObject.name);

      expect(questionnaire).toEqual(QuestionnaireMockObject);
    });
  });

  describe('get questionnaires', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires`).reply(
        200,
        QuestionnaireListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns a list of questionnaires in a serverpark', async () => {
      const questionnaires = await blaiseApiClient.getQuestionnaires(serverpark);

      expect(questionnaires).toEqual(QuestionnaireListMockObject);
    });
  });

  describe('get questionnaire', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}`).reply(
        200,
        QuestionnaireMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns a questionnaire', async () => {
      const questionnaire = await blaiseApiClient.getQuestionnaire(serverpark, QuestionnaireMockObject.name);

      expect(questionnaire).toEqual(QuestionnaireMockObject);
    });
  });

  describe('get whether questionnaire exists', () => {
    const serverpark = 'test';
    const questionnaireInstalled = 'OPN2101A';
    const questionnaireNotInstalled = 'OPN2102B';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireInstalled}/exists`).reply(200, true);
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireNotInstalled}/exists`).reply(200, false);
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns true if it exists', async () => {
      const exists = await blaiseApiClient.questionnaireExists(serverpark, questionnaireInstalled);

      expect(exists).toEqual(true);
    });

    it('returns false if it does not exist', async () => {
      const exists = await blaiseApiClient.questionnaireExists(serverpark, questionnaireNotInstalled);

      expect(exists).toEqual(false);
    });
  });

  describe('get whether questionnaire has mode', () => {
    const serverpark = 'test';
    const hasMode = 'CATI';
    const doesntHaveMode = 'WEB';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/modes/${hasMode}`).reply(200, true);
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/modes/${doesntHaveMode}`).reply(200, false);
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns true if questionnaire has mode', async () => {
      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(serverpark, QuestionnaireMockObject.name, hasMode);

      expect(exists).toEqual(true);
    });

    it('returns false if questionnaire does not have mode', async () => {
      const exists = await blaiseApiClient.doesQuestionnaireHaveMode(serverpark, QuestionnaireMockObject.name, doesntHaveMode);

      expect(exists).toEqual(false);
    });
  });

  describe('installquestionnaire', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires`).reply(
        201,
        InstallQuestionnaireResponseMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('installs an questionnaire and returns the questionnaire file', async () => {
      const questionnaire = await blaiseApiClient.installQuestionnaire(serverpark, InstallQuestionnaireMockObject);

      expect(questionnaire).toEqual(InstallQuestionnaireResponseMockObject);
    });
  });

  describe('delete questionnaire', () => {
    const serverpark = 'test';
    const questionnaireName = 'OPN2004A';

    beforeEach(() => {
      mock.onDelete(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}?name=${questionnaireName}`).reply(
        204,
        null,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it('deletes an questionnaire', async () => {
      const result = await blaiseApiClient.deleteQuestionnaire(serverpark, questionnaireName);

      expect(result).toBeNull();
    });
  });

  describe('get a list of case ids for in questionnaire', () => {
    const serverpark = 'test';
    const questionnaireInstalled = 'OPN2101A';

    const expectedCaseIds = ['100002', '100003'];

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireInstalled}/cases/ids`).reply(200, expectedCaseIds);
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns expected list of ids', async () => {
      const caseIds = await blaiseApiClient.getQuestionnaireCaseIds(serverpark, questionnaireInstalled);

      expect(caseIds).toEqual(expectedCaseIds);
    });
  });

  describe('get questionnaire modes', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/modes`).reply(200, ['CATI', 'CAWI']);
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns list of modes for questionnaire', async () => {
      const exists = await blaiseApiClient.getQuestionnaireModes(serverpark, QuestionnaireMockObject.name);

      expect(exists).toContain('CATI');
      expect(exists).toContain('CAWI');
    });
  });

  describe('get questionnaire settings', () => {
    const serverpark = 'test';

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${QuestionnaireMockObject.name}/settings`).reply(200, QuestionnaireSettingsMockList);
    });

    afterEach(() => {
      mock.reset();
    });

    it('returns list of settings for questionnaire', async () => {
      const exists = await blaiseApiClient.getQuestionnaireSettings(serverpark, QuestionnaireMockObject.name);

      expect(exists).toEqual(QuestionnaireSettingsMockList);
    });
  });

  describe('activate questionnaire', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';

    beforeEach(() => {
      mock.onPatch(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/activate`).reply(204, null);
    });

    afterEach(() => {
      mock.reset();
    });

    it('activates an questionnaire', async () => {
      const result = await blaiseApiClient.activateQuestionnaire(serverpark, questionnaireName);

      expect(result).toBeNull();
    });
  });

  describe('deactivate questionnaire', () => {
    const serverpark = 'test';
    const questionnaireName = 'dst2108t';

    beforeEach(() => {
      mock.onPatch(`http://${blaiseApiUrl}/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/deactivate`).reply(204, null);
    });

    afterEach(() => {
      mock.reset();
    });

    it('deactivates an questionnaire', async () => {
      const result = await blaiseApiClient.deactivateQuestionnaire(serverpark, questionnaireName);

      expect(result).toBeNull();
    });
  });
});

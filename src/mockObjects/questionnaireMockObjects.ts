import {
  InstallQuestionnaire, InstallQuestionnaireResponse, Questionnaire, QuestionnaireSettings,
} from '../interfaces/questionnaire';

export const QuestionnaireListMockObject:Questionnaire[] = [{
  name: 'OPN2101A',
  serverParkName: 'gusty',
  installDate: '2021-01-15T14:41:29.4399898+00:00',
  status: 'Active',
  dataRecordCount: 0,
  hasData: false,
  active: false,
}, {
  name: 'OPN2007T',
  serverParkName: 'gusty',
  installDate: '2021-01-15T15:18:40.1503617+00:00',
  status: 'Active',
  dataRecordCount: 10,
  hasData: true,
  active: true,
}, {
  name: 'LMS2101_AA1',
  serverParkName: 'gusty',
  installDate: '2021-01-15T15:26:43.4233454+00:00',
  status: 'Active',
  dataRecordCount: 0,
  hasData: false,
  active: false,
}];

export const QuestionnaireMockObject:Questionnaire = {
  name: 'OPN2101A',
  serverParkName: 'gusty',
  installDate: '2021-01-15T14:41:29.4399898+00:00',
  status: 'Active',
  dataRecordCount: 0,
  hasData: false,
  active: false,
  blaiseVersion: '5.9.9.2735',
};

export const InstallQuestionnaireMockObject:InstallQuestionnaire = {
  questionnaireFile: 'OPN2004A.bpkg',
};

export const InstallQuestionnaireResponseMockObject:InstallQuestionnaireResponse = {
  questionnaireFile: 'OPN2004A.bpkg',
};

export const QuestionnaireSettingsMockList:QuestionnaireSettings[] = [{
  type: 'StrictInterviewing',
  saveSessionOnTimeout: true,
  saveSessionOnQuit: true,
  deleteSessionOnTimeout: true,
  deleteSessionOnQuit: true,
  sessionTimeout: 15,
  applyRecordLocking: true,
}];

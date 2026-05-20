import type {
  InstallQuestionnaire,
  InstallQuestionnaireResponse,
  Questionnaire,
  QuestionnaireSettings,
} from "../types/questionnaire.types.js";

export const mockQuestionnaires = [
  {
    name: "OPN2101A",
    serverParkName: "gusty",
    installDate: "2021-01-15T14:41:29.4399898+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
  },
  {
    name: "OPN2007T",
    serverParkName: "gusty",
    installDate: "2021-01-15T15:18:40.1503617+00:00",
    status: "Active",
    dataRecordCount: 10,
    hasData: true,
    active: true,
  },
  {
    name: "LMS2101_AA1",
    serverParkName: "gusty",
    installDate: "2021-01-15T15:26:43.4233454+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
  },
] as const satisfies readonly Questionnaire[];

export const mockQuestionnaire = {
  name: "OPN2101A",
  serverParkName: "gusty",
  installDate: "2021-01-15T14:41:29.4399898+00:00",
  status: "Active",
  dataRecordCount: 0,
  hasData: false,
  active: false,
  blaiseVersion: "5.9.9.2735",
} as const satisfies Questionnaire;

export const mockInstallQuestionnaire = {
  questionnaireFile: "OPN2004A.bpkg",
} as const satisfies InstallQuestionnaire;

export const mockInstallQuestionnaireResponse = {
  questionnaireFile: "OPN2004A.bpkg",
} as const satisfies InstallQuestionnaireResponse;

export const mockQuestionnaireSettings = [
  {
    type: "StrictInterviewing",
    saveSessionOnTimeout: true,
    saveSessionOnQuit: true,
    deleteSessionOnTimeout: true,
    deleteSessionOnQuit: true,
    sessionTimeout: 15,
    applyRecordLocking: true,
  },
] as const satisfies readonly QuestionnaireSettings[];

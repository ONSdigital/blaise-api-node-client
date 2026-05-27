import type { CaseEditInformation, CaseResponse, CaseStatus } from "./case.types.js";
import type { JSONValue } from "./common.types.js";
import type { DaybatchResponse, DaybatchSettings } from "./daybatch.types.js";
import type { Diagnostic } from "./diagnostic.types.js";
import type {
  InstallQuestionnaire,
  InstallQuestionnaireResponse,
  Questionnaire,
  QuestionnaireSettings,
} from "./questionnaire.types.js";
import type { QuestionnaireReport } from "./questionnaireReport.types.js";
import type { NewUser, User, UserRole } from "./user.types.js";

export interface BlaiseApi {
  getUser(username: string): Promise<User>;
  getUsers(): Promise<readonly User[]>;
  validatePassword(username: string, password: string): Promise<boolean>;
  createUser(user: NewUser): Promise<NewUser>;
  deleteUser(username: string): Promise<null>;
  getUserRoles(): Promise<readonly UserRole[]>;
  changePassword(username: string, password: string): Promise<null>;
  changeUserRole(username: string, role: string): Promise<null>;
  changeUserServerParks(
    username: string,
    serverParks: readonly string[],
    defaultServerPark: string,
  ): Promise<null>;
  getAllQuestionnairesWithCatiData(): Promise<readonly Questionnaire[]>;
  getQuestionnairesWithCatiData(serverPark: string): Promise<readonly Questionnaire[]>;
  getQuestionnaireWithCatiData(
    serverPark: string,
    questionnaireName: string,
  ): Promise<Questionnaire>;
  getQuestionnaires(serverPark: string): Promise<readonly Questionnaire[]>;
  questionnaireExists(serverPark: string, questionnaireName: string): Promise<boolean>;
  doesQuestionnaireHaveMode(
    serverPark: string,
    questionnaireName: string,
    mode: string,
  ): Promise<boolean>;
  getQuestionnaire(serverPark: string, questionnaireName: string): Promise<Questionnaire>;
  installQuestionnaire(
    serverPark: string,
    questionnaire: InstallQuestionnaire,
  ): Promise<InstallQuestionnaireResponse>;
  deleteQuestionnaire(serverPark: string, questionnaireName: string): Promise<null>;
  getQuestionnaireCaseIds(
    serverPark: string,
    questionnaireName: string,
  ): Promise<readonly string[]>;
  getQuestionnaireModes(serverPark: string, questionnaireName: string): Promise<readonly string[]>;
  getQuestionnaireSettings(
    serverPark: string,
    questionnaireName: string,
  ): Promise<readonly QuestionnaireSettings[]>;
  activateQuestionnaire(serverPark: string, questionnaireName: string): Promise<null>;
  deactivateQuestionnaire(serverPark: string, questionnaireName: string): Promise<null>;
  getDaybatch(serverPark: string, questionnaireName: string): Promise<DaybatchResponse>;
  addDaybatch(
    serverPark: string,
    questionnaireName: string,
    daybatchSettings: DaybatchSettings,
  ): Promise<DaybatchResponse>;
  getSurveyDays(serverPark: string, questionnaireName: string): Promise<readonly string[]>;
  addSurveyDays(
    serverPark: string,
    questionnaireName: string,
    surveyDays: readonly (string | Date)[],
  ): Promise<readonly string[]>;
  getCase(serverPark: string, questionnaireName: string, caseId: string): Promise<CaseResponse>;
  getCaseMultikey(
    serverPark: string,
    questionnaireName: string,
    multiKeyValueMap: ReadonlyMap<string, string>,
  ): Promise<CaseResponse>;
  addCase(
    serverPark: string,
    questionnaireName: string,
    caseId: string,
    caseFields: Readonly<Record<string, JSONValue>>,
  ): Promise<CaseResponse>;
  updateCase(
    serverPark: string,
    questionnaireName: string,
    caseId: string,
    caseFields: Readonly<Record<string, JSONValue>>,
  ): Promise<null>;
  addCaseMultikey(
    serverPark: string,
    questionnaireName: string,
    multiKeyValueMap: ReadonlyMap<string, string>,
    caseFields: Readonly<Record<string, JSONValue>>,
  ): Promise<CaseResponse>;
  getCaseStatus(serverPark: string, questionnaireName: string): Promise<readonly CaseStatus[]>;
  getCaseEditInformation(
    serverPark: string,
    questionnaireName: string,
  ): Promise<readonly CaseEditInformation[]>;
  getDiagnostics(): Promise<readonly Diagnostic[]>;
  getQuestionnaireReportData(
    serverPark: string,
    questionnaireName: string,
    fieldIds: readonly string[],
  ): Promise<QuestionnaireReport>;
}

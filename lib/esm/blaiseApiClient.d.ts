import { AxiosInstance } from "axios";
import BlaiseIapNodeProvider from "blaise-iap-node-provider";
import { BlaiseApiConfig } from "./interfaces/blaiseApiConfig";
import { BlaiseApi } from "./interfaces/blaiseApi";
import * as users from "./functions/userFunctions";
import * as questionnaires from "./functions/questionnaireFunctions";
import * as cases from "./functions/caseFunctions";
import * as diagnostics from "./functions/diagnosticFunctions";
import * as daybatch from "./functions/daybatchFunctions";
declare class BlaiseApiClient implements BlaiseApi {
    blaiseApiUrl: string;
    blaiseIapProvider?: BlaiseIapNodeProvider;
    httpClient: AxiosInstance;
    constructor(blaiseApiUrl: string, config?: BlaiseApiConfig);
    getUser: typeof users.getUser;
    getUsers: typeof users.getUsers;
    validatePassword: typeof users.validatePassword;
    createUser: typeof users.createUser;
    deleteUser: typeof users.deleteUser;
    getUserRoles: typeof users.getUserRoles;
    changePassword: typeof users.changePassword;
    getAllQuestionnairesWithCatiData: typeof questionnaires.getAllQuestionnairesWithCatiData;
    getQuestionnairesWithCatiData: typeof questionnaires.getQuestionnairesWithCatiData;
    getQuestionnaireWithCatiData: typeof questionnaires.getQuestionnaireWithCatiData;
    getQuestionnaires: typeof questionnaires.getQuestionnaires;
    questionnaireExists: typeof questionnaires.questionnaireExists;
    doesQuestionnaireHaveMode: typeof questionnaires.doesQuestionnaireHaveMode;
    getQuestionnaire: typeof questionnaires.getQuestionnaire;
    installQuestionnaire: typeof questionnaires.installQuestionnaire;
    deleteQuestionnaire: typeof questionnaires.deleteQuestionnaire;
    getQuestionnaireCaseIds: typeof questionnaires.getQuestionnaireCaseIds;
    getQuestionnaireModes: typeof questionnaires.getQuestionnaireModes;
    getQuestionnaireSettings: typeof questionnaires.getQuestionnaireSettings;
    activateQuestionnaire: typeof questionnaires.activateQuestionnaire;
    deactivateQuestionnaire: typeof questionnaires.deactivateQuestionnaire;
    getDaybatch: typeof daybatch.getDaybatch;
    addDaybatch: typeof daybatch.addDaybatch;
    getSurveyDays: typeof daybatch.getSurveyDays;
    addSurveyDays: typeof daybatch.addSurveyDays;
    getCase: typeof cases.getCase;
    addCase: typeof cases.addCase;
    getCaseStatus: typeof cases.getCaseStatus;
    getDiagnostics: typeof diagnostics.getDiagnostics;
    private url;
    protected get(url: string): Promise<any>;
    protected post(url: string, data: any): Promise<any>;
    protected delete(url: string): Promise<any>;
    protected patch(url: string, data?: any | undefined): Promise<any>;
    private axiosConfig;
}
export default BlaiseApiClient;
export * from "./interfaces/questionnaire";
export * from "./interfaces/diagnostic";
export * from "./interfaces/case";
export * from "./interfaces/user";
export * from "./interfaces/daybatch";
export * from "./enums/caseOutcome";
export * from "./types/caseData";
export * from "./types/surveyDays";
export * from "./mockObjects/caseMockObjects";
export * from "./mockObjects/diagnosticMockObjects";
export * from "./mockObjects/questionnaireMockObjects";
export * from "./mockObjects/userMockObjects";
export * from "./mockObjects/daybatchMockObjects";
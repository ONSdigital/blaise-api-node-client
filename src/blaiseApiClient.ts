import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import BlaiseIapNodeProvider from "blaise-iap-node-provider";
import { BlaiseApiConfig } from "./interfaces/blaiseApiConfig";
import { BlaiseApi } from "./interfaces/blaiseApi";
import * as users from "./functions/userFunctions";
import * as questionnaires from "./functions/questionnaireFunctions";
import * as cases from "./functions/caseFunctions";
import * as diagnostics from "./functions/diagnosticFunctions";
import * as daybatch from "./functions/daybatchFunctions";


class BlaiseApiClient implements BlaiseApi {
  blaiseApiUrl: string;
  blaiseIapProvider?: BlaiseIapNodeProvider;
  httpClient: AxiosInstance;

  constructor(blaiseApiUrl: string, config?: BlaiseApiConfig) {
    this.blaiseApiUrl = blaiseApiUrl;

    this.httpClient = axios.create();

    if (config?.timeoutInMs !== undefined) {
      this.httpClient.defaults.timeout = config.timeoutInMs;
    }

    if (config?.blaiseApiClientId) {
      this.blaiseIapProvider = new BlaiseIapNodeProvider(config.blaiseApiClientId);
    }
  }

  getUser = users.getUser;
  getUsers = users.getUsers;
  validatePassword = users.validatePassword;
  createUser = users.createUser;
  deleteUser = users.deleteUser;
  getUserRoles = users.getUserRoles;
  changePassword = users.changePassword;

  getAllQuestionnairesWithCatiData = questionnaires.getAllQuestionnairesWithCatiData;
  getQuestionnairesWithCatiData = questionnaires.getQuestionnairesWithCatiData;
  getQuestionnaireWithCatiData = questionnaires.getQuestionnaireWithCatiData;
  getQuestionnaires = questionnaires.getQuestionnaires;
  questionnaireExists = questionnaires.questionnaireExists;
  doesQuestionnaireHaveMode = questionnaires.doesQuestionnaireHaveMode;
  getQuestionnaire = questionnaires.getQuestionnaire;
  installQuestionnaire = questionnaires.installQuestionnaire;
  deleteQuestionnaire = questionnaires.deleteQuestionnaire;
  getQuestionnaireCaseIds = questionnaires.getQuestionnaireCaseIds;
  getQuestionnaireModes = questionnaires.getQuestionnaireModes;
  getQuestionnaireSettings = questionnaires.getQuestionnaireSettings;
  activateQuestionnaire = questionnaires.activateQuestionnaire;
  deactivateQuestionnaire = questionnaires.deactivateQuestionnaire;
  getDaybatch = daybatch.getDaybatch;
  addDaybatch = daybatch.addDaybatch;
  getSurveyDays = daybatch.getSurveyDays;
  addSurveyDays = daybatch.addSurveyDays;

  getCase = cases.getCase;
  addCase = cases.addCase;
  getCaseStatus = cases.getCaseStatus;

  getDiagnostics = diagnostics.getDiagnostics;

  private url(url: string): string {
    if (!url.startsWith("/")) {
      url = `/${url}`;
    }
    return url;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected async get(url: string): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.get(`${this.blaiseApiUrl}${this.url(url)}`, config);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  protected async post(url: string, data: any): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.post(`${this.blaiseApiUrl}${this.url(url)}`, data, config);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected async delete(url: string): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.delete(`${this.blaiseApiUrl}${this.url(url)}`, config);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected async patch(url: string, data: any | undefined = undefined): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.patch(`${this.blaiseApiUrl}${this.url(url)}`, data, config);
    return response.data;
  }

  private async axiosConfig(): Promise<AxiosRequestConfig> {
    let config = {};
    if (this.blaiseIapProvider) {
      config = { headers: await this.blaiseIapProvider.getAuthHeader() };
    }
    return config;
  }
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
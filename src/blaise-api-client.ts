import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Outcome } from "./interfaces/cases.interface";
import BlaiseIapNodeProvider from "blaise-iap-node-provider";
import * as users from "./blaise-api-client/users";
import * as questionnaires from "./blaise-api-client/questionnaires";
import * as cases from "./blaise-api-client/cases";
import * as diagnostics from "./blaise-api-client/diagnostics";
import { IQuestionnaire } from "./interfaces/questionnaires.interface";

export type BlaiseApiConfig = {
  timeoutInMs?: number;
  blaiseApiClientId?: string;
}

export interface IBlaiseClient {
  getQuestionnaires(serverPark: string): Promise<IQuestionnaire[]>
}

class BlaiseApiClient implements IBlaiseClient {
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
  getDaybatch = questionnaires.getDaybatch;
  addDaybatch = questionnaires.addDaybatch;
  getSurveyDays = questionnaires.getSurveyDays;
  addSurveyDays = questionnaires.addSurveyDays;

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

export * from "./interfaces/questionnaires.interface";
export * from "./interfaces/diagnostics.interface";
export * from "./interfaces/cases.interface";
export * from "./interfaces/users.interface";
export * from "./survey-days";

export * from "./mock-objects/diagnostic.mock.objects";
export * from "./mock-objects/questionnaire.mock.objects";

export {
  Outcome
};

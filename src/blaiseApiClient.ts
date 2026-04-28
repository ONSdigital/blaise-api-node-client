import axios, { AxiosInstance } from "axios";
import { BlaiseIapProvider } from "blaise-iap-node-provider";
import { BlaiseApiConfig } from "./types/blaiseApiConfig.js";
import { BlaiseApi } from "./types/blaiseApi.js";
import * as users from "./resources/user.js";
import * as questionnaires from "./resources/questionnaire.js";
import * as cases from "./resources/case.js";
import * as diagnostics from "./resources/diagnostic.js";
import * as daybatch from "./resources/daybatch.js";
import * as reports from "./resources/questionnaireReport.js";

class BlaiseApiClient implements BlaiseApi {
  blaiseApiUrl: string;

  blaiseIapProvider?: BlaiseIapProvider;

  httpClient: AxiosInstance;

  constructor(blaiseApiUrl: string, config?: BlaiseApiConfig) {
    this.blaiseApiUrl = blaiseApiUrl;

    if (config?.blaiseApiClientId) {
      this.blaiseIapProvider = new BlaiseIapProvider(config.blaiseApiClientId);
    }

    this.httpClient = axios.create({
      baseURL: blaiseApiUrl,
      timeout: config?.timeoutInMs,
    });

    this.httpClient.interceptors.request.use(async (requestConfig) => {
      if (this.blaiseIapProvider) {
        const authHeaders = await this.blaiseIapProvider.getAuthHeader();

        Object.assign(requestConfig.headers, authHeaders);
      }

      return requestConfig;
    });
  }

  getUser = users.getUser;
  getUsers = users.getUsers;
  validatePassword = users.validatePassword;
  createUser = users.createUser;
  deleteUser = users.deleteUser;
  getUserRoles = users.getUserRoles;
  changePassword = users.changePassword;
  changeUserRole = users.changeUserRole;
  changeUserServerParks = users.changeUserServerParks;

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
  getCaseMultikey = cases.getCaseMultikey;
  addCase = cases.addCase;
  updateCase = cases.updateCase;
  addCaseMultikey = cases.addCaseMultikey;
  getMultikeyQueryString = cases.getMultikeyQueryString;
  getCaseStatus = cases.getCaseStatus;
  getCaseEditInformation = cases.getCaseEditInformation;

  getDiagnostics = diagnostics.getDiagnostics;

  getQuestionnaireReportData = reports.getQuestionnaireReportData;

  protected async get<T>(url: string): Promise<T> {
    const response = await this.httpClient.get<T>(url);

    return response.data;
  }

  protected async post<T>(url: string, data: unknown): Promise<T> {
    const response = await this.httpClient.post<T>(url, data);

    return response.data;
  }

  protected async delete<T>(url: string): Promise<T> {
    const response = await this.httpClient.delete<T>(url);

    return response.data;
  }

  protected async patch<T>(url: string, data?: unknown): Promise<T> {
    const response = await this.httpClient.patch<T>(url, data);

    return response.data;
  }
}

export default BlaiseApiClient;

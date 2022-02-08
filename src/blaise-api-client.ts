import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import * as instrumentsTypes from "./interfaces/instruments";
import * as diagnosticsTypes from "./interfaces/diagnostics";
import * as casesTypes from "./interfaces/cases";
import { Outcome } from "./interfaces/cases";
import * as userTypes from "./interfaces/users";
import * as diagonisticsMocks from "./mock-objects/diagnostic-mock-objects";
import * as instrumentMocks from "./mock-objects/instrument-mock-objects";
import BlaiseIapNodeProvider from "blaise-iap-node-provider";
import * as users from "./blaise-api-client/users";
import * as instruments from "./blaise-api-client/instruments";
import * as cases from "./blaise-api-client/cases";
import * as diagnostics from "./blaise-api-client/diagnostics";

export type BlaiseApiConfig = {
  timeoutInMs?: number;
  blaiseApiClientId?: string;
}

class BlaiseApiClient {
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
  validatePassword = users.validatePassword;

  async createUser(user: userTypes.CreateUser): Promise<userTypes.CreateUserResponse> {
    return this.post("/api/v1/users", user);
  }

  async deleteUser(userName: string): Promise<null> {
    return this.delete(`/api/v1/users/${userName}`);
  }

  getAllInstrumentsWithCatiData = instruments.getAllInstrumentsWithCatiData;
  getInstrumentsWithCatiData = instruments.getInstrumentsWithCatiData;
  getInstrumentWithCatiData = instruments.getInstrumentWithCatiData;
  getInstruments = instruments.getInstruments;
  instrumentExists = instruments.instrumentExists;
  doesInstrumentHaveMode = instruments.doesInstrumentHaveMode;
  getInstrument = instruments.getInstrument;
  installInstrument = instruments.installInstrument;
  deleteInstrument = instruments.deleteInstrument;
  getInstrumentCaseIds = instruments.getInstrumentCaseIds;
  getInstrumentModes = instruments.getInstrumentModes;
  getInstrumentSettings = instruments.getInstrumentSettings;
  getDaybatch = instruments.getDaybatch;
  addDaybatch = instruments.addDaybatch;
  getSurveyDays = instruments.getSurveyDays;
  addSurveyDays = instruments.addSurveyDays;

  getCase = cases.getCase;
  addCase = cases.addCase;
  activateInstrument = cases.activateInstrument;
  deactivateInstrument = cases.deactivateInstrument;
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
  protected async patch(url: string): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.patch(`${this.blaiseApiUrl}${this.url(url)}`, config);
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

export type {
  instrumentsTypes,
  diagnosticsTypes,
  casesTypes,
  userTypes
};

export {
  diagonisticsMocks,
  instrumentMocks,
  Outcome
};

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Outcome } from "./interfaces/cases";
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
  getUsers = users.getUsers;
  validatePassword = users.validatePassword;
  createUser = users.createUser;
  deleteUser = users.deleteUser;
  getUserRoles = users.getUserRoles;
  changePassword = users.changePassword;

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

export * from "./interfaces/instruments";
export * from "./interfaces/diagnostics";
export * from "./interfaces/cases";
export * from "./interfaces/users";
export * from "./survey-days";

export * from "./mock-objects/diagnostic-mock-objects";
export * from "./mock-objects/instrument-mock-objects";

export {
  Outcome
};

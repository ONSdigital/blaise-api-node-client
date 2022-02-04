import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  Instrument, InstallInstrument, InstallInstrumentResponse, InstrumentSettings,
  DaybatchResponse, DaybatchSettings, SurveyDays, CaseResponse, CaseFields, CaseStatus, Outcome
} from "./interfaces/instrument";
import { Diagnostic } from "./interfaces/diagnostic";
import { DiagnosticMockObject } from "./mock-objects/diagnostic-mock-objects"
import { InstrumentListMockObject, InstrumentMockObject, InstallInstrumentMockObject, InstallInstrumentResponseMockObject, InstrumentSettingsMockList } from "./mock-objects/instrument-mock-objects"
import { User, ValidatePasswordRequest, CreateUser, CreateUserResponse } from "./interfaces/user";
import BlaiseIapNodeProvider from "blaise-iap-node-provider";

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

  async getAllInstrumentsWithCatiData(): Promise<Instrument[]> {
    return this.get("/api/v1/cati/instruments");
  }

  async getInstrumentsWithCatiData(serverpark: string): Promise<Instrument[]> {
    return this.get(`/api/v1/cati/serverparks/${serverpark}/instruments`);
  }

  async getInstrumentWithCatiData(serverpark: string, instrumentName: string): Promise<Instrument> {
    return this.get(`/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}`);
  }

  async getInstruments(serverpark: string): Promise<Instrument[]> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments`);
  }

  async instrumentExists(serverpark: string, instrumentName: string): Promise<boolean> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/exists`)
  }

  async doesInstrumentHaveMode(serverpark: string, instrumentName: string, mode: string): Promise<boolean> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/modes/${mode}`)
  }

  async getInstrument(serverpark: string, instrumentName: string): Promise<Instrument> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}`);
  }

  async installInstrument(serverpark: string, instrument: InstallInstrument): Promise<InstallInstrumentResponse> {
    return this.post(`/api/v1/serverparks/${serverpark}/instruments`, instrument);
  }

  async deleteInstrument(serverpark: string, instrumentName: string): Promise<null> {
    return this.delete(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}?name=${instrumentName}`);
  }

  async getInstrumentCaseIds(serverpark: string, instrumentName: string): Promise<string[]> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/ids`);
  }

  async getDiagnostics(): Promise<Diagnostic[]> {
    return this.get("/api/v1/health/diagnosis");
  }

  async getInstrumentModes(serverpark: string, instrumentName: string): Promise<string[]> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/modes`);
  }

  async getInstrumentSettings(serverpark: string, instrumentName: string): Promise<InstrumentSettings[]> {
    return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/settings`);
  }

  async getDaybatch(serverpark: string, instrumentName: string): Promise<DaybatchResponse> {
    return this.get(`/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/daybatch`);
  }

  async addDaybatch(serverpark: string, instrumentName: string, daybatchSettings: DaybatchSettings): Promise<DaybatchResponse> {
    return this.post(`/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/daybatch`, daybatchSettings)
  }

  async getSurveyDays(serverpark: string, instrumentName: string): Promise<string[]> {
    return this.get(`api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/surveydays`)
  }

  async addSurveyDays(serverpark: string, instrumentName: string, surveyDays: SurveyDays): Promise<string[]> {
    surveyDays = surveyDays.map((surveyDay: string | Date) => {
      if (surveyDay instanceof Date) {
        return surveyDay.toISOString()
      }
      return surveyDay
    })
    return this.post(`api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/surveydays`, surveyDays)
  }

  async getCase(serverpark: string, instrumentName: string, caseID: string): Promise<CaseResponse> {
    return this.get(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/${caseID}`)
  }

  async addCase(serverpark: string, instrumentName: string, caseID: string, caseFields: CaseFields): Promise<CaseResponse> {
    return this.post(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/${caseID}`, caseFields)
  }

  async activateInstrument(serverpark: string, instrumentName: string): Promise<null> {
    return this.patch(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/activate`)
  }

  async deactivateInstrument(serverpark: string, instrumentName: string): Promise<null> {
    return this.patch(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/deactivate`)
  }

  async getCaseStatus(serverpark: string, instrumentName: string): Promise<CaseStatus[]> {
    return this.get(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/status`)
  }

  async getUser(username: string): Promise<User> {
    return this.get(`api/v1/users/${username}`)
  }

  async validatePassword(username: string, password: string): Promise<boolean> {
    const validationRequest: ValidatePasswordRequest = { password: password }
    return this.post(`api/v1/users/${username}/validate`, validationRequest)
  }

  async createUser(user: CreateUser): Promise<CreateUserResponse> {
    return this.post("/api/v1/users", user);
  }

  async deleteUser(userName: string): Promise<null> {
    return this.delete(`/api/v1/users/${userName}`);
  }

  private url(url: string): string {
    if (!url.startsWith("/")) {
      url = `/${url}`;
    }
    return url;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async get(url: string): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.get(`${this.blaiseApiUrl}${this.url(url)}`, config);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  private async post(url: string, data: any): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.post(`${this.blaiseApiUrl}${this.url(url)}`, data, config);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async delete(url: string): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.delete(`${this.blaiseApiUrl}${this.url(url)}`, config);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async patch(url: string): Promise<any> {
    const config = await this.axiosConfig();
    const response = await this.httpClient.patch(`${this.blaiseApiUrl}${this.url(url)}`, config);
    return response.data;
  }

  private async axiosConfig(): Promise<AxiosRequestConfig> {
    let config = {};
    if (this.blaiseIapProvider) {
      config = { headers: await this.blaiseIapProvider.getAuthHeader() };
    }
    return config
  }
}

export default BlaiseApiClient;

export type {
  Instrument,
  InstallInstrument,
  InstallInstrumentResponse,
  Diagnostic,
  InstrumentSettings,
  CaseFields,
  CaseResponse,
  SurveyDays,
  DaybatchResponse,
  DaybatchSettings,
  CaseStatus,
  User
};
export { DiagnosticMockObject }
export {
  InstrumentListMockObject,
  InstrumentMockObject,
  InstallInstrumentMockObject,
  InstallInstrumentResponseMockObject,
  InstrumentSettingsMockList,
  Outcome
}

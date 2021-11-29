import axios, { AxiosInstance } from "axios";
import { Instrument, InstallInstrument, InstallInstrumentResponse, InstrumentSettings,
  DaybatchResponse, DaybatchSettings, SurveyDays, CaseResponse, CaseFields} from "./interfaces/instrument";
import { Diagnostic  } from "./interfaces/diagnostic";
import { DiagnosticMockObject } from "./mock-objects/diagnostic-mock-objects"
import { InstrumentListMockObject, InstrumentMockObject, InstallInstrumentMockObject, InstallInstrumentResponseMockObject, InstrumentSettingsMockList } from "./mock-objects/instrument-mock-objects"

class BlaiseApiClient {
  blaise_api_url: string;
  httpClient: AxiosInstance;

  constructor(blaise_api_url: string, timeoutInMs?:number) {
    this.blaise_api_url = blaise_api_url;
    this.httpClient = axios.create();

    if (typeof timeoutInMs !== 'undefined') {
      this.httpClient.defaults.timeout = 10000;
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
        return surveyDay.toString()
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

  private url(url: string): string {
    if (!url.startsWith("/")) {
      url = `/${url}`;
    }
    return url;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async get(url: string): Promise<any> {
    const response = await this.httpClient.get(`${this.blaise_api_url}${this.url(url)}`);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  private async post(url: string, data: any): Promise<any> {
    const response = await this.httpClient.post(`${this.blaise_api_url}${this.url(url)}`, data);
    return response.data;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async delete(url: string): Promise<any> {
    const response = await this.httpClient.delete(`${this.blaise_api_url}${this.url(url)}`);
    return response.data;
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
  DaybatchSettings
};
export { DiagnosticMockObject }
export {
  InstrumentListMockObject,
  InstrumentMockObject,
  InstallInstrumentMockObject,
  InstallInstrumentResponseMockObject,
  InstrumentSettingsMockList
}

import BlaiseApiClient from "../blaise-api-client";
import { DaybatchResponse, DaybatchSettings, InstallInstrument, InstallInstrumentResponse, Instrument, InstrumentSettings, SurveyDays } from "../interfaces/instruments";

export async function getAllInstrumentsWithCatiData(this: BlaiseApiClient): Promise<Instrument[]> {
  return this.get("/api/v1/cati/instruments");
}

export async function getInstrumentsWithCatiData(this: BlaiseApiClient, serverpark: string): Promise<Instrument[]> {
  return this.get(`/api/v1/cati/serverparks/${serverpark}/instruments`);
}

export async function getInstrumentWithCatiData(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<Instrument> {
  return this.get(`/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}`);
}

export async function getInstruments(this: BlaiseApiClient, serverpark: string): Promise<Instrument[]> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments`);
}

export async function instrumentExists(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<boolean> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/exists`);
}

export async function doesInstrumentHaveMode(this: BlaiseApiClient, serverpark: string, instrumentName: string, mode: string): Promise<boolean> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/modes/${mode}`);
}

export async function getInstrument(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<Instrument> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}`);
}

export async function installInstrument(this: BlaiseApiClient, serverpark: string, instrument: InstallInstrument): Promise<InstallInstrumentResponse> {
  return this.post(`/api/v1/serverparks/${serverpark}/instruments`, instrument);
}

export async function deleteInstrument(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<null> {
  return this.delete(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}?name=${instrumentName}`);
}

export async function getInstrumentCaseIds(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<string[]> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/ids`);
}

export async function getInstrumentModes(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<string[]> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/modes`);
}

export async function getInstrumentSettings(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<InstrumentSettings[]> {
  return this.get(`/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/settings`);
}

export async function getDaybatch(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<DaybatchResponse> {
  return this.get(`/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/daybatch`);
}

export async function addDaybatch(this: BlaiseApiClient, serverpark: string, instrumentName: string, daybatchSettings: DaybatchSettings): Promise<DaybatchResponse> {
  return this.post(`/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/daybatch`, daybatchSettings);
}

export async function getSurveyDays(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<string[]> {
  return this.get(`api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/surveydays`);
}

export async function addSurveyDays(this: BlaiseApiClient, serverpark: string, instrumentName: string, surveyDays: SurveyDays): Promise<string[]> {
  surveyDays = surveyDays.map((surveyDay: string | Date) => {
    if (surveyDay instanceof Date) {
      return surveyDay.toISOString();
    }
    return surveyDay;
  });
  return this.post(`api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/surveydays`, surveyDays);
}

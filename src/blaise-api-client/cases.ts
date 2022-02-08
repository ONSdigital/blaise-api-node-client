import BlaiseApiClient from "../blaise-api-client";
import { CaseFields, CaseResponse, CaseStatus } from "../interfaces/cases";

export async function getCase(this: BlaiseApiClient, serverpark: string, instrumentName: string, caseID: string): Promise<CaseResponse> {
  return this.get(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/${caseID}`);
}

export async function addCase(this: BlaiseApiClient, serverpark: string, instrumentName: string, caseID: string, caseFields: CaseFields): Promise<CaseResponse> {
  return this.post(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/${caseID}`, caseFields);
}

export async function activateInstrument(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<null> {
  return this.patch(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/activate`);
}

export async function deactivateInstrument(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<null> {
  return this.patch(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/deactivate`);
}

export async function getCaseStatus(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<CaseStatus[]> {
  return this.get(`api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/status`);
}

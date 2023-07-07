import BlaiseApiClient from "../blaise-api-client";
import { CaseFields, ICaseResponse, ICaseStatus } from "../interfaces/cases.interface";

export async function getCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string): Promise<ICaseResponse> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseID}`);
}

export async function addCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string, caseFields: CaseFields): Promise<ICaseResponse> {
  return this.post(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseID}`, caseFields);
}

export async function getCaseStatus(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<ICaseStatus[]> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`);
}

import BlaiseApiClient from "../blaiseApiClient";
import {CaseResponse, CaseStatus } from "../interfaces/case";
import { CaseData } from "../types/caseData";

export async function getCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string): Promise<CaseResponse> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseID}`);
}

export async function addCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string, caseFields: CaseData): Promise<CaseResponse> {
  return this.post(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseID}`, caseFields);
}

export async function getCaseStatus(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<CaseStatus[]> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`);
}

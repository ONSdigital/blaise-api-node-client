import BlaiseApiClient from '../blaiseApiClient';
import { CaseEditInformation, CaseResponse, CaseStatus } from '../interfaces/case';
import { CaseData } from '../types/caseData';

export async function getCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseId: string): Promise<CaseResponse> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`);
}

export function getMultikeyQueryString(multiKeyValueMap: Map<string, string>) {
  const keyNamesQueryString = `keyNames=${Array.from(multiKeyValueMap.keys()).join('&keyNames=')}`;
  const keyValuesQueryString = `keyValues=${Array.from(multiKeyValueMap.values()).join('&keyValues=')}`;
  const keyValueQueryString = `${keyNamesQueryString}&${keyValuesQueryString}`;
  return keyValueQueryString;
}

export async function getCaseMultikey(this: BlaiseApiClient, serverpark: string, questionnaireName: string, multiKeyValueMap: Map<string, string>): Promise<CaseResponse> {
  const queryString = getMultikeyQueryString(multiKeyValueMap);
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/multikey?${queryString}`);
}

export async function addCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseId: string, caseFields: CaseData): Promise<CaseResponse> {
  return this.post(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`, caseFields);
}

export async function updateCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseId: string, caseFields: CaseData): Promise<null> {
  return this.patch<null>(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/${caseId}`, caseFields);
}

export async function addCaseMultikey(
  this: BlaiseApiClient,
  serverpark: string,
  questionnaireName: string,
  multiKeyValueMap: Map<string, string>,
  caseFields: CaseData,
): Promise<CaseResponse> {
  const queryString = getMultikeyQueryString(multiKeyValueMap);
  return this.post(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/multikey?${queryString}`, caseFields);
}

export async function getCaseStatus(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<CaseStatus[]> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/status`);
}

export async function getCaseEditInformation(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<CaseEditInformation[]> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/cases/edit`);
}

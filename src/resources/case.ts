import {
  buildRepeatedQueryString,
  encodePathSegment,
  getServerParkQuestionnairePath,
} from "../requestPath.js";

import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type { CaseEditInformation, CaseResponse, CaseStatus } from "../types/case.types.js";
import type { JSONValue } from "../types/common.types.js";

const getCasesPath = (serverPark: string, questionnaireName: string): string =>
  `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/cases`;

const getCasePath = (serverPark: string, questionnaireName: string, caseId: string): string =>
  `${getCasesPath(serverPark, questionnaireName)}/${encodePathSegment(caseId)}`;

const getMultikeyQueryString = (multiKeyValueMap: ReadonlyMap<string, string>): string => {
  const queryParts = [
    buildRepeatedQueryString("keyNames", multiKeyValueMap.keys()),
    buildRepeatedQueryString("keyValues", multiKeyValueMap.values()),
  ];

  return queryParts.filter((queryPart) => queryPart.length > 0).join("&");
};

export async function getCase(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  caseId: string,
): Promise<CaseResponse> {
  return this.get(getCasePath(serverPark, questionnaireName, caseId));
}

export async function getCaseMultikey(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  multiKeyValueMap: ReadonlyMap<string, string>,
): Promise<CaseResponse> {
  const queryString = getMultikeyQueryString(multiKeyValueMap);

  return this.get(`${getCasesPath(serverPark, questionnaireName)}/multikey?${queryString}`);
}

export async function addCase(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  caseId: string,
  caseFields: Readonly<Record<string, JSONValue>>,
): Promise<CaseResponse> {
  return this.post(getCasePath(serverPark, questionnaireName, caseId), caseFields);
}

export async function updateCase(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  caseId: string,
  caseFields: Readonly<Record<string, JSONValue>>,
): Promise<null> {
  return this.patch<null>(getCasePath(serverPark, questionnaireName, caseId), caseFields);
}

export async function addCaseMultikey(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  multiKeyValueMap: ReadonlyMap<string, string>,
  caseFields: Readonly<Record<string, JSONValue>>,
): Promise<CaseResponse> {
  const queryString = getMultikeyQueryString(multiKeyValueMap);

  return this.post(
    `${getCasesPath(serverPark, questionnaireName)}/multikey?${queryString}`,
    caseFields,
  );
}

export async function getCaseStatus(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<readonly CaseStatus[]> {
  return this.get(`${getCasesPath(serverPark, questionnaireName)}/status`);
}

export async function getCaseEditInformation(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<readonly CaseEditInformation[]> {
  return this.get(`${getCasesPath(serverPark, questionnaireName)}/edit`);
}

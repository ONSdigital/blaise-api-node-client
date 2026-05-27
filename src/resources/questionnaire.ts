import {
  encodePathSegment,
  getCatiServerParkQuestionnairePath,
  getCatiServerParkQuestionnairesPath,
  getServerParkQuestionnairePath,
  getServerParkQuestionnairesPath,
} from "../requestPath.js";

import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type {
  InstallQuestionnaire,
  InstallQuestionnaireResponse,
  Questionnaire,
  QuestionnaireSettings,
} from "../types/questionnaire.types.js";

export async function getAllQuestionnairesWithCatiData(
  this: BlaiseApiClient,
): Promise<readonly Questionnaire[]> {
  return this.get<readonly Questionnaire[]>("api/v2/cati/questionnaires");
}

export async function getQuestionnairesWithCatiData(
  this: BlaiseApiClient,
  serverPark: string,
): Promise<readonly Questionnaire[]> {
  return this.get<readonly Questionnaire[]>(getCatiServerParkQuestionnairesPath(serverPark));
}

export async function getQuestionnaireWithCatiData(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<Questionnaire> {
  return this.get<Questionnaire>(getCatiServerParkQuestionnairePath(serverPark, questionnaireName));
}

export async function getQuestionnaires(
  this: BlaiseApiClient,
  serverPark: string,
): Promise<readonly Questionnaire[]> {
  return this.get<readonly Questionnaire[]>(getServerParkQuestionnairesPath(serverPark));
}

export async function questionnaireExists(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<boolean> {
  return this.get<boolean>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/exists`,
  );
}

export async function doesQuestionnaireHaveMode(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  mode: string,
): Promise<boolean> {
  return this.get<boolean>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/modes/${encodePathSegment(mode)}`,
  );
}

export async function getQuestionnaire(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<Questionnaire> {
  return this.get<Questionnaire>(getServerParkQuestionnairePath(serverPark, questionnaireName));
}

export async function installQuestionnaire(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaire: InstallQuestionnaire,
): Promise<InstallQuestionnaireResponse> {
  return this.post<InstallQuestionnaireResponse>(
    getServerParkQuestionnairesPath(serverPark),
    questionnaire,
  );
}

export async function deleteQuestionnaire(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<null> {
  // The Blaise API requires the questionnaire name as both a path segment and a query parameter.
  const queryString = new URLSearchParams({ name: questionnaireName }).toString();

  return this.delete<null>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}?${queryString}`,
  );
}

export async function getQuestionnaireCaseIds(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<readonly string[]> {
  return this.get<readonly string[]>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/cases/ids`,
  );
}

export async function getQuestionnaireModes(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<readonly string[]> {
  return this.get<readonly string[]>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/modes`,
  );
}

export async function getQuestionnaireSettings(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<readonly QuestionnaireSettings[]> {
  return this.get<readonly QuestionnaireSettings[]>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/settings`,
  );
}

export async function activateQuestionnaire(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<null> {
  return this.patch<null>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/activate`,
  );
}

export async function deactivateQuestionnaire(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<null> {
  return this.patch<null>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/deactivate`,
  );
}

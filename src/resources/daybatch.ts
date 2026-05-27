import { getCatiServerParkQuestionnairePath } from "../requestPath.js";

import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type { DaybatchResponse, DaybatchSettings } from "../types/daybatch.types.js";

const formatDate = (date: string | Date): string =>
  date instanceof Date ? date.toISOString() : date;

const getDaybatchPath = (serverPark: string, questionnaireName: string): string =>
  `${getCatiServerParkQuestionnairePath(serverPark, questionnaireName)}/daybatch`;

const getSurveyDaysPath = (serverPark: string, questionnaireName: string): string =>
  `${getCatiServerParkQuestionnairePath(serverPark, questionnaireName)}/surveydays`;

export async function getDaybatch(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<DaybatchResponse> {
  return this.get(getDaybatchPath(serverPark, questionnaireName));
}

export async function addDaybatch(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  daybatchSettings: DaybatchSettings,
): Promise<DaybatchResponse> {
  return this.post(getDaybatchPath(serverPark, questionnaireName), daybatchSettings);
}

export async function getSurveyDays(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
): Promise<readonly string[]> {
  return this.get(getSurveyDaysPath(serverPark, questionnaireName));
}

export async function addSurveyDays(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  surveyDays: ReadonlyArray<string | Date>,
): Promise<readonly string[]> {
  const formattedSurveyDays = surveyDays.map(formatDate);

  return this.post(getSurveyDaysPath(serverPark, questionnaireName), formattedSurveyDays);
}

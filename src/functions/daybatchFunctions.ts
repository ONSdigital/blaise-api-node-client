import BlaiseApiClient from "../blaiseApiClient.js";
import { DaybatchResponse, DaybatchSettings } from "../interfaces/daybatch.js";

const formatDate = (date: string | Date): string =>
  date instanceof Date ? date.toISOString() : date;

export async function getDaybatch(
  this: BlaiseApiClient,
  serverpark: string,
  questionnaireName: string,
): Promise<DaybatchResponse> {
  return this.get(
    `api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`,
  );
}

export async function addDaybatch(
  this: BlaiseApiClient,
  serverpark: string,
  questionnaireName: string,
  daybatchSettings: DaybatchSettings,
): Promise<DaybatchResponse> {
  return this.post(
    `api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`,
    daybatchSettings,
  );
}

export async function getSurveyDays(
  this: BlaiseApiClient,
  serverpark: string,
  questionnaireName: string,
): Promise<string[]> {
  return this.get(
    `api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`,
  );
}

export async function addSurveyDays(
  this: BlaiseApiClient,
  serverpark: string,
  questionnaireName: string,
  surveyDays: ReadonlyArray<string | Date>,
): Promise<string[]> {
  const formattedSurveyDays = surveyDays.map(formatDate);

  return this.post(
    `api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`,
    formattedSurveyDays,
  );
}

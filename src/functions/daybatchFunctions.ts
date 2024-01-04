import BlaiseApiClient from '../blaiseApiClient';
import { DaybatchResponse, DaybatchSettings } from '../interfaces/daybatch';
import { SurveyDays } from '../types/surveyDays';

export async function getDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<DaybatchResponse> {
  return this.get(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`);
}

export async function addDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string, daybatchSettings: DaybatchSettings): Promise<DaybatchResponse> {
  return this.post(`/api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/daybatch`, daybatchSettings);
}

export async function getSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<string[]> {
  return this.get(`api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`);
}

export async function addSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string, surveyDays: SurveyDays): Promise<string[]> {
  const formattedSurveyDays = surveyDays.map((surveyDay: string | Date) => {
    if (surveyDay instanceof Date) {
      return surveyDay.toISOString();
    }
    return surveyDay;
  });
  return this.post(`api/v2/cati/serverparks/${serverpark}/questionnaires/${questionnaireName}/surveydays`, formattedSurveyDays);
}

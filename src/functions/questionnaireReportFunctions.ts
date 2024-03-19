import BlaiseApiClient from '../blaiseApiClient';
import { QuestionnaireReport } from '../interfaces/questionnaireReport';

export async function getQuestionnaireReportData(this: BlaiseApiClient, serverpark: string, questionnaireName: string, fieldIds:string[]): Promise<QuestionnaireReport> {
  const queryArray:string[] = [];
  fieldIds.forEach((fieldId) => {
    queryArray.push(`fieldIds=${fieldId}`);
  });

  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report?${queryArray.join('&')}`);
}

export default getQuestionnaireReportData;

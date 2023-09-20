import BlaiseApiClient from "../blaiseApiClient";
import {QuestionnaireReport} from "../interfaces/questionnaireReport";

export async function getReportData(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<QuestionnaireReport> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report`);
}

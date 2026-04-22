import BlaiseApiClient from "../blaiseApiClient.js";
import { QuestionnaireReport } from "../interfaces/questionnaireReport.js";

export async function getQuestionnaireReportData(
  this: BlaiseApiClient,
  serverpark: string,
  questionnaireName: string,
  fieldIds: string[],
): Promise<QuestionnaireReport> {
  const queryParams = fieldIds.map((fieldId) => `fieldIds=${fieldId}`).join("&");

  return this.get<QuestionnaireReport>(
    `api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report?${queryParams}`,
  );
}

export default getQuestionnaireReportData;

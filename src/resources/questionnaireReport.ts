import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type { QuestionnaireReport } from "../types/questionnaireReport.types.js";

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

import { buildRepeatedQueryString, getServerParkQuestionnairePath } from "../requestPath.js";

import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type { QuestionnaireReport } from "../types/questionnaireReport.types.js";

export async function getQuestionnaireReportData(
  this: BlaiseApiClient,
  serverPark: string,
  questionnaireName: string,
  fieldIds: readonly string[],
): Promise<QuestionnaireReport> {
  const queryParams = buildRepeatedQueryString("fieldIds", fieldIds);

  return this.get<QuestionnaireReport>(
    `${getServerParkQuestionnairePath(serverPark, questionnaireName)}/report?${queryParams}`,
  );
}

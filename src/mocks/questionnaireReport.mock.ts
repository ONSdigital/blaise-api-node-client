import { CaseOutcome } from "../enums/caseOutcome.js";

import type { QuestionnaireReport } from "../types/questionnaireReport.types.js";

export const mockQuestionnaireReport: QuestionnaireReport = {
  questionnaireName: "FRS2211A",
  questionnaireId: "00000000-0000-0000-0000-000000000000",
  reportingData: [
    {
      "qiD.Serial_Number": "1",
      "qhAdmin.HOut": CaseOutcome.Partial,
    },
    {
      "qiD.Serial_Number": "2",
      "qhAdmin.HOut": CaseOutcome.Completed,
    },
  ],
};

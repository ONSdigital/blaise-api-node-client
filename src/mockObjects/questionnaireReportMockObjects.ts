import { QuestionnaireReport } from "../interfaces/questionnaireReport.js";
import CaseOutcome from "../enums/caseOutcome.js";

const reportMockObject: QuestionnaireReport = {
  questionnaireName: "FRS2211A",
  questionnaireId: "00000000-0000-0000-0000-000000000000",
  reportingData: [
    {
      "qiD.Serial_Number": "1",
      "qhAdmin.HOut": CaseOutcome.Partial.toString(),
    },
    {
      "qiD.Serial_Number": "2",
      "qhAdmin.HOut": CaseOutcome.Completed.toString(),
    },
  ],
};

export default reportMockObject;

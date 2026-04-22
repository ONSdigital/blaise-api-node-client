import { CaseData } from "../types/caseData.js";

export interface QuestionnaireReport {
  questionnaireName: string;
  questionnaireId: string;
  reportingData: CaseData[];
}

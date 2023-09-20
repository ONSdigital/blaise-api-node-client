import { CaseData } from "../types/caseData";
export interface QuestionnaireReport {
    questionnaireName: string;
    questionnaireId: string;
    reportingData: CaseData[];
}

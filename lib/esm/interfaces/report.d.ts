import { CaseData } from "../types/caseData";
export default interface Report {
    questionnaireName: string;
    questionnaireId: string;
    reportingData: CaseData[];
}

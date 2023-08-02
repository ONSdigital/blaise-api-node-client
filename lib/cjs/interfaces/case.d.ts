import { CaseOutcome } from "../enums/caseOutcome";
import { CaseData } from "../types/caseData";
export interface CaseResponse {
    caseID: string;
    caseData: CaseData;
}
export interface CaseStatus {
    caseID: string;
    caseOutcome: CaseOutcome;
}

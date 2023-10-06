import { CaseOutcome } from "../enums/caseOutcome";
import { CaseData } from "../types/caseData";
export interface CaseResponse {
    caseId: string;
    fieldData: CaseData;
}
export interface CaseStatus {
    primaryKey: string;
    outcome: CaseOutcome;
}

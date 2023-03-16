import BlaiseApiClient from "../blaise-api-client";
import { CaseFields, CaseResponse, CaseStatus } from "../interfaces/cases";
export declare function getCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string): Promise<CaseResponse>;
export declare function addCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string, caseFields: CaseFields): Promise<CaseResponse>;
export declare function getCaseStatus(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<CaseStatus[]>;

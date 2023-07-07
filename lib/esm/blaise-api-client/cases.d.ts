import BlaiseApiClient from "../blaise-api-client";
import { CaseFields, ICaseResponse, ICaseStatus } from "../interfaces/cases.interface";
export declare function getCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string): Promise<ICaseResponse>;
export declare function addCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseID: string, caseFields: CaseFields): Promise<ICaseResponse>;
export declare function getCaseStatus(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<ICaseStatus[]>;

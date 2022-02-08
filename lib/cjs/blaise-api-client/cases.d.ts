import BlaiseApiClient from "../blaise-api-client";
import { CaseFields, CaseResponse, CaseStatus } from "../interfaces/cases";
export declare function getCase(this: BlaiseApiClient, serverpark: string, instrumentName: string, caseID: string): Promise<CaseResponse>;
export declare function addCase(this: BlaiseApiClient, serverpark: string, instrumentName: string, caseID: string, caseFields: CaseFields): Promise<CaseResponse>;
export declare function activateInstrument(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<null>;
export declare function deactivateInstrument(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<null>;
export declare function getCaseStatus(this: BlaiseApiClient, serverpark: string, instrumentName: string): Promise<CaseStatus[]>;

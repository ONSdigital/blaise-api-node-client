import BlaiseApiClient from '../blaiseApiClient';
import { CaseResponse, CaseStatus } from '../interfaces/case';
import { CaseData } from '../types/caseData';
export declare function getCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseId: string): Promise<CaseResponse>;
export declare function getMultikeyQueryString(multiKeyValueMap: Map<string, string>): string;
export declare function getCaseMultikey(this: BlaiseApiClient, serverpark: string, questionnaireName: string, multiKeyValueMap: Map<string, string>): Promise<CaseResponse>;
export declare function addCase(this: BlaiseApiClient, serverpark: string, questionnaireName: string, caseId: string, caseFields: CaseData): Promise<CaseResponse>;
export declare function addCaseMultikey(this: BlaiseApiClient, serverpark: string, questionnaireName: string, multiKeyValueMap: Map<string, string>, caseFields: CaseData): Promise<CaseResponse>;
export declare function getCaseStatus(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<CaseStatus[]>;

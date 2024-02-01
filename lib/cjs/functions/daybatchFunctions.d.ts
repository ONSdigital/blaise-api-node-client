import BlaiseApiClient from '../blaiseApiClient';
import { DaybatchResponse, DaybatchSettings } from '../interfaces/daybatch';
import { SurveyDays } from '../types/surveyDays';
export declare function getDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<DaybatchResponse>;
export declare function addDaybatch(this: BlaiseApiClient, serverpark: string, questionnaireName: string, daybatchSettings: DaybatchSettings): Promise<DaybatchResponse>;
export declare function getSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<string[]>;
export declare function addSurveyDays(this: BlaiseApiClient, serverpark: string, questionnaireName: string, surveyDays: SurveyDays): Promise<string[]>;

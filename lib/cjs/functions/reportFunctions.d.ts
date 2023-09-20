import BlaiseApiClient from "../blaiseApiClient";
import Report from "../interfaces/report";
export declare function getReportData(this: BlaiseApiClient, serverpark: string, questionnaireName: string, fieldIds: string[]): Promise<Report>;

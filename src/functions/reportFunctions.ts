import BlaiseApiClient from "../blaiseApiClient";
import Report from "../interfaces/report";

export async function getReportData(this: BlaiseApiClient, serverpark: string, questionnaireName: string, fieldIds:string[]): Promise<Report> {
  const queryArray:string[] = [];
  fieldIds.forEach((fieldId) =>{
    queryArray.push(`fieldIds=${fieldId}`);
  });
  
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report?${queryArray.join("&")}`);
}

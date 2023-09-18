import BlaiseApiClient from "../blaiseApiClient";
import Report from "../interfaces/report"

export async function getReportData(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<Report> {
  return this.get(`/api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/report`);
}

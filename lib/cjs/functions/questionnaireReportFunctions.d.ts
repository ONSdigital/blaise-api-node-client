import BlaiseApiClient from '../blaiseApiClient';
import { QuestionnaireReport } from '../interfaces/questionnaireReport';
export declare function getQuestionnaireReportData(this: BlaiseApiClient, serverpark: string, questionnaireName: string, fieldIds: string[]): Promise<QuestionnaireReport>;
export default getQuestionnaireReportData;

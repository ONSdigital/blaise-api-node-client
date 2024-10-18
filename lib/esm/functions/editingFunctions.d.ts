import BlaiseApiClient from '../blaiseApiClient';
import { EditingDetails } from '../interfaces/editing';
export declare function getEditingDetails(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<EditingDetails[]>;
export default getEditingDetails;

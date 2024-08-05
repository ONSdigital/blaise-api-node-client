import BlaiseApiClient from '../blaiseApiClient';
import { EditingDetails } from '../interfaces/editing';

export async function getEditingDetails(this: BlaiseApiClient, serverpark: string, questionnaireName: string): Promise<EditingDetails[]> {
  return this.get(`api/v2/serverparks/${serverpark}/questionnaires/${questionnaireName}/editing`);
}

export default getEditingDetails;

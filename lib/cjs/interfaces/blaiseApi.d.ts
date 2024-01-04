import { Questionnaire } from './questionnaire';
export interface BlaiseApi {
    getQuestionnaires(serverPark: string): Promise<Questionnaire[]>;
}

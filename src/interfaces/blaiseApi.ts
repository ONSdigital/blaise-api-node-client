import { Questionnaire } from "./questionnaire.js";

export interface BlaiseApi {
  getQuestionnaires(serverPark: string): Promise<Questionnaire[]>;
}

import { type Questionnaire } from "./questionnaire.types.js";

export interface BlaiseApi {
  getQuestionnaires(serverPark: string): Promise<Questionnaire[]>;
}

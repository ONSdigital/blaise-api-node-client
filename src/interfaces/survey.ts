import { Questionnaire } from "./questionnaire.js";

export interface Survey {
  questionnaires: Questionnaire[];
  survey: string;
}

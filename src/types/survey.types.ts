import { type Questionnaire } from "./questionnaire.types.js";

export interface Survey {
  questionnaires: Questionnaire[];
  survey: string;
}

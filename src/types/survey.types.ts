import { type Questionnaire } from "./questionnaire.types.js";

export interface Survey {
  readonly questionnaires: readonly Questionnaire[];
  readonly survey: string;
}

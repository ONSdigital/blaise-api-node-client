import { Questionnaire } from "./questionnaire";
export interface Survey {
    questionnaires: Questionnaire[];
    survey: string;
}

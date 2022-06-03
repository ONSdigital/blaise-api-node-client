import { Questionnaire } from "./questionnaires";
interface Survey {
    instruments: Questionnaire[];
    survey: string;
}
export type { Questionnaire, Survey };

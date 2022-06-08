import { Questionnaire } from "./questionnaires";

interface Survey {
    questionnaires: Questionnaire[]
    survey: string
}

export type { Questionnaire, Survey };

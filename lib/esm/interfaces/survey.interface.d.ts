import { IQuestionnaire } from "./questionnaires.interface";
interface ISurvey {
    questionnaires: IQuestionnaire[];
    survey: string;
}
export type { IQuestionnaire, ISurvey };

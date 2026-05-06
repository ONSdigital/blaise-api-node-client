import { type JSONValue } from "./common.types.js";

export interface QuestionnaireReport {
  questionnaireName: string;
  questionnaireId: string;
  reportingData: Record<string, JSONValue>[];
}

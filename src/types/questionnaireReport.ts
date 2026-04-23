import { JSONValue } from "./common.js";

export interface QuestionnaireReport {
  questionnaireName: string;
  questionnaireId: string;
  reportingData: Record<string, JSONValue>[];
}

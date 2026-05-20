import { type JSONValue } from "./common.types.js";

export interface QuestionnaireReport {
  readonly questionnaireName: string;
  readonly questionnaireId: string;
  readonly reportingData: readonly Readonly<Record<string, JSONValue>>[];
}

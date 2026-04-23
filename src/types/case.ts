import type { CaseOutcome } from "../enums/caseOutcome.js";
import type { EditedStatus } from "../enums/editedStatus.js";
import type { Organisation } from "../enums/organisation.js";
import type { JSONValue } from "./common.js";

export interface CaseResponse {
  readonly caseId: string;
  readonly fieldData: Record<string, JSONValue>;
}

export interface CaseStatus {
  readonly primaryKey: string;
  readonly outcome: CaseOutcome;
}

export interface CaseEditInformation {
  readonly primaryKey: string;
  readonly outcome: CaseOutcome;
  readonly assignedTo: string;
  readonly interviewer: string;
  readonly editedStatus: EditedStatus;
  readonly organisation: Organisation;
  readonly editUrl: string;
  readonly readOnlyUrl: string;
}

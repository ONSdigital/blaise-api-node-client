import { EditedStatus } from '../blaiseApiClient';
import { CaseOutcome } from '../enums/caseOutcome';
import Organisation from '../enums/organisation';
import { CaseData } from '../types/caseData';

export interface CaseResponse {
  caseId: string
  fieldData: CaseData
}

export interface CaseStatus {
  primaryKey: string,
  outcome: CaseOutcome
}

export interface CaseEditInformation {
  primaryKey: string,
  outcome: CaseOutcome,
  assignedTo: string,
  interviewer: string,
  editedStatus: EditedStatus,
  organisation: Organisation,
  editUrl: string,
  readOnlyUrl: string
}

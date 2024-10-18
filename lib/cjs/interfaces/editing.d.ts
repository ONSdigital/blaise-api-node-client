import { CaseOutcome } from '../enums/caseOutcome';
import { EditedStatus } from '../enums/editedStatus';
export interface EditingDetails {
    primaryKey: string;
    outcome: CaseOutcome;
    assignedTo: string;
    editedStatus: EditedStatus;
    interviewer: string;
}

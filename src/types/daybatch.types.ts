export interface DaybatchResponse {
  readonly dayBatchDate: string;
  readonly caseIds: readonly string[];
}

export interface DaybatchSettings {
  readonly dayBatchDate: string;
  readonly checkForTreatedCases: boolean;
}

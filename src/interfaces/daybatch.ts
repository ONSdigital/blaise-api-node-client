export interface DaybatchResponse {
    dayBatchDate: string
    caseIds: string[]
}

export interface DaybatchSettings {
    dayBatchDate: string
    checkForTreatedCases: boolean
}

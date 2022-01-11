interface Instrument {
    installDate: string
    name: string
    expired?: boolean
    serverParkName: string
    activeToday?: boolean
    surveyDays?: string[]
    link?: string
    fieldPeriod: string
    surveyTLA?: string
    dataRecordCount?: number
    status?: string
    hasData?: boolean
    active?: boolean
}

interface InstallInstrument {
    instrumentFile: string
}

interface InstallInstrumentResponse {
    instrumentFile: string
}

interface InstrumentSettings {
    type: string
    saveSessionOnTimeout: boolean
    saveSessionOnQuit: boolean
    deleteSessionOnTimeout: boolean
    deleteSessionOnQuit: boolean
    sessionTimeout: number
    applyRecordLocking: boolean
}

interface DaybatchResponse {
    dayBatchDate: string
    caseIDs: string[]
}

interface DaybatchSettings {
    dayBatchDate: string
    checkForTreatedCases: boolean
}

type SurveyDays = string[] | Date[]

type CaseFields = Record<string, any>

interface CaseResponse {
    caseID: string
    fieldData: CaseFields
}

interface CaseStatus {
    caseID: string,
    ouutcome: Outcome,
}

enum Outcome {
    Completed = 110,
    Partial = 210,
    NonContact = 310,
    HQRefusal = 430,
    NotAvailable = 440,
    HardRefusal = 460,
    SoftRefusal = 461,
    LanguageDifficultiesHeadOffice = 541,
    LanguageDifficultiesInterviewer = 542,
    DeleteRequestedCompleted = 561,
    DeleteRequestedPartial = 562,
    Ineligible = 580
}

export type {
    Instrument,
    InstallInstrument,
    InstallInstrumentResponse,
    InstrumentSettings,
    DaybatchResponse,
    DaybatchSettings,
    SurveyDays,
    CaseFields,
    CaseResponse,
    CaseStatus,
    Outcome
};

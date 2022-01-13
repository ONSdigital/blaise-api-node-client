interface Instrument {
    installDate: string;
    name: string;
    expired?: boolean;
    serverParkName: string;
    activeToday?: boolean;
    surveyDays?: string[];
    link?: string;
    fieldPeriod: string;
    surveyTLA?: string;
    dataRecordCount?: number;
    status?: string;
    hasData?: boolean;
    active?: boolean;
}
interface InstallInstrument {
    instrumentFile: string;
}
interface InstallInstrumentResponse {
    instrumentFile: string;
}
interface InstrumentSettings {
    type: string;
    saveSessionOnTimeout: boolean;
    saveSessionOnQuit: boolean;
    deleteSessionOnTimeout: boolean;
    deleteSessionOnQuit: boolean;
    sessionTimeout: number;
    applyRecordLocking: boolean;
}
interface DaybatchResponse {
    dayBatchDate: string;
    caseIDs: string[];
}
interface DaybatchSettings {
    dayBatchDate: string;
    checkForTreatedCases: boolean;
}
declare type SurveyDays = string[] | Date[];
declare type CaseFields = Record<string, any>;
interface CaseResponse {
    caseID: string;
    fieldData: CaseFields;
}
interface CaseStatus {
    primaryKey: string;
    outcome: Outcome;
}
declare enum Outcome {
    None = 0,
    Completed = 110,
    CompletedNudge = 120,
    Partial = 210,
    AppointmentMade = 300,
    NonContact = 310,
    HQRefusal = 430,
    NotAvailable = 440,
    HardRefusal = 460,
    SoftRefusal = 461,
    LanguageDifficultiesHeadOffice = 541,
    LanguageDifficultiesInterviewer = 542,
    WrongNumber = 542,
    DeleteRequestedCompleted = 561,
    DeleteRequestedPartial = 562,
    IneligibleVacant = 540,
    IneligibleNonResidential = 551,
    IneligibleInstitution = 560,
    IneligibleSecondHome = 580,
    ConcernsWontTakePart = 360,
    RejectTandCs = 380,
    LostAccessCode = 373,
    UnableToComplete = 370,
    NoInternetAccess = 371,
    RequestedDifferentMode = 372,
    NoTraceOfAddress = 510,
    Under16 = 631,
    WrongAddress = 640,
    BrailleRequested = 411,
    LargePrintRequested = 412,
    OtherFormat = 413,
    DeleteRequested = 390,
    RequestedCopyOfData = 791,
    ClarificationOnStudyRequested = 792,
    AssistanceRequested = 793,
    RequestForContext = 794,
    QuestionProblem = 795
}
export type { Instrument, InstallInstrument, InstallInstrumentResponse, InstrumentSettings, DaybatchResponse, DaybatchSettings, SurveyDays, CaseFields, CaseResponse, CaseStatus, };
export { Outcome };

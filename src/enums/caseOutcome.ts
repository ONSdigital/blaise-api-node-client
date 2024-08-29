// eslint-disable-next-line no-shadow
export enum CaseOutcome {
    None = 0,
    Completed = 110,
    CompletedNudge = 120,
    CompletedProxy = 130,
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

export default CaseOutcome;

interface Instrument {
    installDate: string
    name: string
    expired?: boolean
    serverParkName: string
    activeToday?: boolean // deprecated
    surveyDays?: string[] // deprecated
    link?: string
    fieldPeriod: string
    surveyTLA?: string
    dataRecordCount?: number
    status?: string
    hasData?: boolean
    nodes?: Node[]
    active?: boolean //deprecated
}

interface Node {
    nodeName: string;
    nodeStatus: string;
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

export type {
    Instrument,
    InstallInstrument,
    InstallInstrumentResponse,
    InstrumentSettings,
    DaybatchResponse,
    DaybatchSettings,
    SurveyDays,
};

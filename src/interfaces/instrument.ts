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

export type {Instrument, InstallInstrument, InstallInstrumentResponse, InstrumentSettings};
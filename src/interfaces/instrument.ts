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

export type { Instrument, InstallInstrument, InstallInstrumentResponse };
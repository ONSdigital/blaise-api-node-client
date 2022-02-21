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
    nodes?: Node[];
    active?: boolean;
}
interface Node {
    nodeName: string;
    nodeStatus: string;
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
export type { Instrument, InstallInstrument, InstallInstrumentResponse, InstrumentSettings, DaybatchResponse, DaybatchSettings, SurveyDays, };

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
export type { Instrument, InstallInstrument, InstallInstrumentResponse, InstrumentSettings, DaybatchResponse, DaybatchSettings, SurveyDays, CaseFields, CaseResponse };

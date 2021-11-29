export declare const InstrumentListMockObject: {
    name: string;
    serverParkName: string;
    installDate: string;
    status: string;
    dataRecordCount: number;
    hasData: boolean;
    active: boolean;
}[];
export declare const InstrumentMockObject: {
    name: string;
    serverParkName: string;
    installDate: string;
    status: string;
    dataRecordCount: number;
    hasData: boolean;
    active: boolean;
};
export declare const InstallInstrumentMockObject: {
    instrumentName: string;
    instrumentFile: string;
    bucketPath: string;
};
export declare const InstallInstrumentResponseMockObject: {
    instrumentFile: string;
};
export declare const InstrumentSettingsMockList: {
    type: string;
    saveSessionOnTimeout: boolean;
    saveSessionOnQuit: boolean;
    deleteSessionOnTimeout: boolean;
    deleteSessionOnQuit: boolean;
    sessionTimeout: number;
    applyRecordLocking: boolean;
}[];
export declare const InstrumentDaybatchCasesMock: {
    dayBatchDate: string;
    caseIds: string[];
}[];
export declare const AddDaybatchMock: {
    dayBatchDate: string;
    checkForTreatedCases: boolean;
};
export declare const SurveyDaysMock: string[];
export declare const SurveyDaysDatesMock: Date[];

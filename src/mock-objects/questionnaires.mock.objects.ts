import { IDaybatchResponse, IDaybatchSettings, IInstallQuestionnaire, IInstallQuestionnaireResponse, IQuestionnaire, IQuestionnaireSettings, ISurveyDays } from "../interfaces/questionnaires.interface";

export const QuestionnaireListMockObject:IQuestionnaire[] = [{
    name: "OPN2101A",
    serverParkName: "gusty",
    installDate: "2021-01-15T14:41:29.4399898+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
}, {
    name: "OPN2007T",
    serverParkName: "gusty",
    installDate: "2021-01-15T15:18:40.1503617+00:00",
    status: "Active",
    dataRecordCount: 10,
    hasData: true,
    active: true,
}, {
    name: "LMS2101_AA1",
    serverParkName: "gusty",
    installDate: "2021-01-15T15:26:43.4233454+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
}];

export const QuestionnaireMockObject:IQuestionnaire = {
    name: "OPN2101A",
    serverParkName: "gusty",
    installDate: "2021-01-15T14:41:29.4399898+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
    blaiseVersion: "5.9.9.2735",
};

export const InstallQuestionnaireMockObject:IInstallQuestionnaire = {
    questionnaireFile: "OPN2004A.bpkg",
};

export const InstallQuestionnaireResponseMockObject:IInstallQuestionnaireResponse = {
    questionnaireFile: "OPN2004A.bpkg"
};

export const QuestionnaireSettingsMockList:IQuestionnaireSettings[] = [{
        type: "StrictInterviewing",
        saveSessionOnTimeout: true,
        saveSessionOnQuit: true,
        deleteSessionOnTimeout: true,
        deleteSessionOnQuit: true,
        sessionTimeout: 15,
        applyRecordLocking: true
}];

export const QuestionnaireDaybatchCasesMock:IDaybatchResponse[] = [
    {
        dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
        caseIds: [
            "100101",
            "100102",
            "100103",
            "100104"
        ]
    }
];

export const AddDaybatchMock:IDaybatchSettings = {
    dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
    checkForTreatedCases: true
};

export const SurveyDaysMock = [
    "2021-01-15T14:41:29.4399898+00:00"
];

export const SurveyDaysDatesMock:ISurveyDays = [
    new Date("2021-01-15T14:41:29.4399898+00:00")
];

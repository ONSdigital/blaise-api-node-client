export var QuestionnaireListMockObject = [{
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
export var QuestionnaireMockObject = {
    name: "OPN2101A",
    serverParkName: "gusty",
    installDate: "2021-01-15T14:41:29.4399898+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
};
export var InstallQuestionnaireMockObject = {
    questionnaireName: "OPN2004A",
    questionnaireFile: "OPN2004A.bpkg",
    bucketPath: "/"
};
export var InstallQuestionnaireResponseMockObject = {
    questionnaireFile: "OPN2004A.bpkg"
};
export var QuestionnaireSettingsMockList = [
    {
        "type": "StrictInterviewing",
        "saveSessionOnTimeout": true,
        "saveSessionOnQuit": true,
        "deleteSessionOnTimeout": true,
        "deleteSessionOnQuit": true,
        "sessionTimeout": 15,
        "applyRecordLocking": true
    }
];
export var QuestionnaireDaybatchCasesMock = [
    {
        "dayBatchDate": "2021-01-15T14:41:29.4399898+00:00",
        "caseIds": [
            "100101",
            "100102",
            "100103",
            "100104"
        ]
    }
];
export var AddDaybatchMock = {
    "dayBatchDate": "2021-01-15T14:41:29.4399898+00:00",
    "checkForTreatedCases": true
};
export var SurveyDaysMock = [
    "2021-01-15T14:41:29.4399898+00:00"
];
export var SurveyDaysDatesMock = [
    new Date("2021-01-15T14:41:29.4399898+00:00")
];

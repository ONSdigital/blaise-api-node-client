import { DaybatchResponse, DaybatchSettings } from "../interfaces/daybatch";
import { SurveyDays } from "../types/surveyDays";

export const QuestionnaireDaybatchCasesMock:DaybatchResponse[] = [
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

export const AddDaybatchMock:DaybatchSettings = {
    dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
    checkForTreatedCases: true
};

export const SurveyDaysMock = [
    "2021-01-15T14:41:29.4399898+00:00"
];

export const SurveyDaysDatesMock:SurveyDays = [
    new Date("2021-01-15T14:41:29.4399898+00:00")
];

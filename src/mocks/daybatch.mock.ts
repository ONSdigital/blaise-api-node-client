import type { DaybatchResponse, DaybatchSettings } from "../types/daybatch.types.js";

export const mockDaybatchCases: ReadonlyArray<DaybatchResponse> = [
  {
    dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
    caseIds: ["100101", "100102", "100103", "100104"],
  },
];

export const mockAddDaybatchSettings: DaybatchSettings = {
  dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
  checkForTreatedCases: true,
};

export const mockSurveyDays: ReadonlyArray<string> = ["2021-01-15T14:41:29.4399898+00:00"];

export const mockSurveyDayDates: ReadonlyArray<Date> = [
  new Date("2021-01-15T14:41:29.4399898+00:00"),
];

import type { DaybatchResponse, DaybatchSettings } from "../types/daybatch.types.js";

export const mockDaybatch = {
  dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
  caseIds: ["100101", "100102", "100103", "100104"],
} as const satisfies DaybatchResponse;

export const mockAddDaybatchSettings = {
  dayBatchDate: "2021-01-15T14:41:29.4399898+00:00",
  checkForTreatedCases: true,
} as const satisfies DaybatchSettings;

export const mockSurveyDays = [
  "2021-01-15T14:41:29.4399898+00:00",
] as const satisfies readonly string[];

export const mockSurveyDayDates = [
  new Date("2021-01-15T14:41:29.4399898+00:00"),
] as const satisfies readonly Date[];

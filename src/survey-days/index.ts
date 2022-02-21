import { SurveyDays } from "../interfaces/instruments";

export function surveyIsActiveToday(surveyDays: SurveyDays | undefined): boolean {
  if (!surveyDays) {
    return false;
  }
  const dateToday = today();
  for (const surveyDay of surveyDays) {
    if (asDate(surveyDay) === dateToday) {
      return true;
    }
  }
  return false;
}

export function surveyIsActive(surveyDays: SurveyDays | undefined): boolean {
  if (!surveyDays) {
    return false;
  }
  let previousOrCurrentSurveyDay = false;
  let futureOrCurrentSurveyDay = false;
  const dateToday = today();
  for (const surveyDay of surveyDays) {
    const surveyDayDate = asDate(surveyDay);
    if (surveyDayDate <= dateToday) {
      previousOrCurrentSurveyDay = true;
    }
    if (surveyDayDate >= dateToday) {
      futureOrCurrentSurveyDay = true;
    }
    if (previousOrCurrentSurveyDay && futureOrCurrentSurveyDay) {
      return true;
    }
  }
  return false;
}

function asDate(date: string | Date): number {
  if (date instanceof Date) {
    return date.setHours(0, 0, 0, 0);
  }
  return new Date(date).setHours(0, 0, 0, 0);
}

function today(): number {
  return new Date().setHours(0, 0, 0, 0);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.surveyIsActive = exports.surveyIsActiveToday = void 0;
function surveyIsActiveToday(surveyDays) {
    if (!surveyDays) {
        return false;
    }
    var dateToday = today();
    for (var _i = 0, surveyDays_1 = surveyDays; _i < surveyDays_1.length; _i++) {
        var surveyDay = surveyDays_1[_i];
        if (asDate(surveyDay) === dateToday) {
            return true;
        }
    }
    return false;
}
exports.surveyIsActiveToday = surveyIsActiveToday;
function surveyIsActive(surveyDays) {
    if (!surveyDays) {
        return false;
    }
    var previousOrCurrentSurveyDay = false;
    var futureOrCurrentSurveyDay = false;
    var dateToday = today();
    for (var _i = 0, surveyDays_2 = surveyDays; _i < surveyDays_2.length; _i++) {
        var surveyDay = surveyDays_2[_i];
        var surveyDayDate = asDate(surveyDay);
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
exports.surveyIsActive = surveyIsActive;
function asDate(date) {
    if (date instanceof Date) {
        return date.setHours(0, 0, 0, 0);
    }
    return new Date(date).setHours(0, 0, 0, 0);
}
function today() {
    return new Date().setHours(0, 0, 0, 0);
}

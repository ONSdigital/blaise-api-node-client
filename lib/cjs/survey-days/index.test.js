"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe("surveyIsActiveToday", function () {
    describe("with no survey days", function () {
        it("returns false", function () {
            expect(_1.surveyIsActiveToday(undefined)).toBeFalsy();
        });
    });
    describe("with a survey day of yesterdays date", function () {
        it("returns true", function () {
            expect(_1.surveyIsActiveToday([yesterday()])).toBeFalsy();
        });
    });
    describe("with a survey day of today date", function () {
        it("returns true", function () {
            expect(_1.surveyIsActiveToday([new Date()])).toBeTruthy();
        });
    });
});
describe("surveyIsActive", function () {
    describe("when there was an active survey day yesterday", function () {
        describe("and there are no other active survey days", function () {
            it("returns false", function () {
                expect(_1.surveyIsActive([yesterday()])).toBeFalsy();
            });
        });
        describe("and there is an active survey day today", function () {
            it("returns true", function () {
                expect(_1.surveyIsActive([yesterday(), new Date()])).toBeTruthy();
            });
        });
        describe("and there is an active survey day tomorrow", function () {
            it("returns true", function () {
                expect(_1.surveyIsActive([yesterday(), tomorrow()])).toBeTruthy();
            });
        });
    });
    describe("when there is only a survey day today", function () {
        it("returns true", function () {
            expect(_1.surveyIsActive([new Date()])).toBeTruthy();
        });
    });
});
function yesterday() {
    var date = new Date();
    return new Date(date.setDate(date.getDate() - 1));
}
function tomorrow() {
    var date = new Date();
    return new Date(date.setDate(date.getDate() + 1));
}

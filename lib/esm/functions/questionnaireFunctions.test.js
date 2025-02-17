var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import BlaiseApiClient, { QuestionnaireListMockObject, QuestionnaireMockObject, InstallQuestionnaireMockObject, InstallQuestionnaireResponseMockObject, QuestionnaireSettingsMockList, } from '../blaiseApiClient';
var mock = new MockAdapter(axios, { onNoMatch: 'throwException' });
var blaiseApiUrl = 'testUri';
var blaiseApiClient = new BlaiseApiClient("http://".concat(blaiseApiUrl));
describe('blaiseApiClient', function () {
    describe('get all questionnaires with Cati data', function () {
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/cati/questionnaires")).reply(200, QuestionnaireListMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns a list of all questionnaires including CATI data', function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaires;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getAllQuestionnairesWithCatiData()];
                    case 1:
                        questionnaires = _a.sent();
                        expect(questionnaires).toEqual(QuestionnaireListMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get questionnaires with Cati data', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/cati/serverparks/").concat(serverpark, "/questionnaires")).reply(200, QuestionnaireListMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns a list of all questionnaires including CATI data within a serverpark', function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaires;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnairesWithCatiData(serverpark)];
                    case 1:
                        questionnaires = _a.sent();
                        expect(questionnaires).toEqual(QuestionnaireListMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get questionnaire with Cati data', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/cati/serverparks/").concat(serverpark, "/questionnaires/").concat(QuestionnaireMockObject.name)).reply(200, QuestionnaireMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns an questionnaire including CATI data', function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaire;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnaireWithCatiData(serverpark, QuestionnaireMockObject.name)];
                    case 1:
                        questionnaire = _a.sent();
                        expect(questionnaire).toEqual(QuestionnaireMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get questionnaires', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires")).reply(200, QuestionnaireListMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns a list of questionnaires in a serverpark', function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaires;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnaires(serverpark)];
                    case 1:
                        questionnaires = _a.sent();
                        expect(questionnaires).toEqual(QuestionnaireListMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get questionnaire', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(QuestionnaireMockObject.name)).reply(200, QuestionnaireMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns a questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaire;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnaire(serverpark, QuestionnaireMockObject.name)];
                    case 1:
                        questionnaire = _a.sent();
                        expect(questionnaire).toEqual(QuestionnaireMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get whether questionnaire exists', function () {
        var serverpark = 'test';
        var questionnaireInstalled = 'OPN2101A';
        var questionnaireNotInstalled = 'OPN2102B';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireInstalled, "/exists")).reply(200, true);
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireNotInstalled, "/exists")).reply(200, false);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns true if it exists', function () { return __awaiter(void 0, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.questionnaireExists(serverpark, questionnaireInstalled)];
                    case 1:
                        exists = _a.sent();
                        expect(exists).toEqual(true);
                        return [2 /*return*/];
                }
            });
        }); });
        it('returns false if it does not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.questionnaireExists(serverpark, questionnaireNotInstalled)];
                    case 1:
                        exists = _a.sent();
                        expect(exists).toEqual(false);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get whether questionnaire has mode', function () {
        var serverpark = 'test';
        var hasMode = 'CATI';
        var doesntHaveMode = 'WEB';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(QuestionnaireMockObject.name, "/modes/").concat(hasMode)).reply(200, true);
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(QuestionnaireMockObject.name, "/modes/").concat(doesntHaveMode)).reply(200, false);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns true if questionnaire has mode', function () { return __awaiter(void 0, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.doesQuestionnaireHaveMode(serverpark, QuestionnaireMockObject.name, hasMode)];
                    case 1:
                        exists = _a.sent();
                        expect(exists).toEqual(true);
                        return [2 /*return*/];
                }
            });
        }); });
        it('returns false if questionnaire does not have mode', function () { return __awaiter(void 0, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.doesQuestionnaireHaveMode(serverpark, QuestionnaireMockObject.name, doesntHaveMode)];
                    case 1:
                        exists = _a.sent();
                        expect(exists).toEqual(false);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('installquestionnaire', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onPost("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires")).reply(201, InstallQuestionnaireResponseMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('installs an questionnaire and returns the questionnaire file', function () { return __awaiter(void 0, void 0, void 0, function () {
            var questionnaire;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.installQuestionnaire(serverpark, InstallQuestionnaireMockObject)];
                    case 1:
                        questionnaire = _a.sent();
                        expect(questionnaire).toEqual(InstallQuestionnaireResponseMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('delete questionnaire', function () {
        var serverpark = 'test';
        var questionnaireName = 'OPN2004A';
        beforeEach(function () {
            mock.onDelete("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "?name=").concat(questionnaireName)).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('deletes an questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.deleteQuestionnaire(serverpark, questionnaireName)];
                    case 1:
                        result = _a.sent();
                        expect(result).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get a list of case ids for in questionnaire', function () {
        var serverpark = 'test';
        var questionnaireInstalled = 'OPN2101A';
        var expectedCaseIds = ['100002', '100003'];
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireInstalled, "/cases/ids")).reply(200, expectedCaseIds);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns expected list of ids', function () { return __awaiter(void 0, void 0, void 0, function () {
            var caseIds;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnaireCaseIds(serverpark, questionnaireInstalled)];
                    case 1:
                        caseIds = _a.sent();
                        expect(caseIds).toEqual(expectedCaseIds);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get questionnaire modes', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(QuestionnaireMockObject.name, "/modes")).reply(200, ['CATI', 'CAWI']);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns list of modes for questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnaireModes(serverpark, QuestionnaireMockObject.name)];
                    case 1:
                        exists = _a.sent();
                        expect(exists).toContain('CATI');
                        expect(exists).toContain('CAWI');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get questionnaire settings', function () {
        var serverpark = 'test';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(QuestionnaireMockObject.name, "/settings")).reply(200, QuestionnaireSettingsMockList);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns list of settings for questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getQuestionnaireSettings(serverpark, QuestionnaireMockObject.name)];
                    case 1:
                        exists = _a.sent();
                        expect(exists).toEqual(QuestionnaireSettingsMockList);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('activate questionnaire', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        beforeEach(function () {
            mock.onPatch("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/activate")).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('activates an questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.activateQuestionnaire(serverpark, questionnaireName)];
                    case 1:
                        result = _a.sent();
                        expect(result).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('deactivate questionnaire', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        beforeEach(function () {
            mock.onPatch("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/deactivate")).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('deactivates an questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.deactivateQuestionnaire(serverpark, questionnaireName)];
                    case 1:
                        result = _a.sent();
                        expect(result).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});

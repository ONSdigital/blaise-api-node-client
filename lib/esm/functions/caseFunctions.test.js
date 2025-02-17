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
import BlaiseApiClient, { CaseEditInformationListMockObject, CaseStatusListMockObject } from '../blaiseApiClient';
var mock = new MockAdapter(axios, { onNoMatch: 'throwException' });
var blaiseApiUrl = 'testUri';
var blaiseApiClient = new BlaiseApiClient("http://".concat(blaiseApiUrl));
describe('blaiseApiClient', function () {
    describe('get case', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        var caseId = '100101;';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/").concat(caseId)).reply(200, {
                caseId: caseId,
                fieldData: {},
            });
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns a case', function () { return __awaiter(void 0, void 0, void 0, function () {
            var caseResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getCase(serverpark, questionnaireName, caseId)];
                    case 1:
                        caseResponse = _a.sent();
                        expect(caseResponse.caseId).toEqual(caseId);
                        expect(caseResponse.fieldData).toEqual({});
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get case multikey', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        var caseId = '100101;';
        var keyValueMap = new Map();
        keyValueMap.set('key1', 'value1');
        keyValueMap.set('key2', 'value2');
        var queryString = blaiseApiClient.getMultikeyQueryString(keyValueMap);
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/multikey?").concat(queryString)).reply(200, {
                caseId: caseId,
                fieldData: {},
            });
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns a case', function () { return __awaiter(void 0, void 0, void 0, function () {
            var caseResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getCaseMultikey(serverpark, questionnaireName, keyValueMap)];
                    case 1:
                        caseResponse = _a.sent();
                        expect(caseResponse.caseId).toEqual(caseId);
                        expect(caseResponse.fieldData).toEqual({});
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('add case', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        var caseId = '100101;';
        beforeEach(function () {
            mock.onPost("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/").concat(caseId)).reply(200, {
                caseId: caseId,
                fieldData: {},
            });
        });
        afterEach(function () {
            mock.reset();
        });
        it('adds a case', function () { return __awaiter(void 0, void 0, void 0, function () {
            var caseResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.addCase(serverpark, questionnaireName, caseId, {})];
                    case 1:
                        caseResponse = _a.sent();
                        expect(caseResponse.caseId).toEqual(caseId);
                        expect(caseResponse.fieldData).toEqual({});
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('update case', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        var caseId = '100101;';
        beforeEach(function () {
            mock.onPatch("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/").concat(caseId)).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('updates a case', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.updateCase(serverpark, questionnaireName, caseId, {})];
                    case 1:
                        result = _a.sent();
                        expect(result).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('add case multikey', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        var caseId = '100101;';
        var keyValueMap = new Map();
        keyValueMap.set('key1', 'value1');
        keyValueMap.set('key2', 'value2');
        var queryString = blaiseApiClient.getMultikeyQueryString(keyValueMap);
        beforeEach(function () {
            mock.onPost("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/multikey?").concat(queryString)).reply(200, {
                caseId: caseId,
                fieldData: {},
            });
        });
        afterEach(function () {
            mock.reset();
        });
        it('adds a case with multiple keys', function () { return __awaiter(void 0, void 0, void 0, function () {
            var caseResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.addCaseMultikey(serverpark, questionnaireName, keyValueMap, {})];
                    case 1:
                        caseResponse = _a.sent();
                        expect(caseResponse.caseId).toEqual(caseId);
                        expect(caseResponse.fieldData).toEqual({});
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get cases status', function () {
        var serverpark = 'test';
        var questionnaireName = 'dst2108t';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/status")).reply(200, CaseStatusListMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('gets all cases and outcome codes for a given questionnaire', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getCaseStatus(serverpark, questionnaireName)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(CaseStatusListMockObject);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get case edit information', function () {
        var serverpark = 'test';
        var questionnaireName = 'FRS2108A';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/serverparks/").concat(serverpark, "/questionnaires/").concat(questionnaireName, "/cases/edit")).reply(200, CaseEditInformationListMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns editing details for a case', function () { return __awaiter(void 0, void 0, void 0, function () {
            var editingDetailsListResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getCaseEditInformation(serverpark, questionnaireName)];
                    case 1:
                        editingDetailsListResponse = _a.sent();
                        editingDetailsListResponse.forEach(function (editingDetailsResponse, index) {
                            expect(editingDetailsResponse.primaryKey).toEqual(CaseEditInformationListMockObject[index].primaryKey);
                            expect(editingDetailsResponse.outcome).toEqual(CaseEditInformationListMockObject[index].outcome);
                            expect(editingDetailsResponse.assignedTo).toEqual(CaseEditInformationListMockObject[index].assignedTo);
                            expect(editingDetailsResponse.editedStatus).toEqual(CaseEditInformationListMockObject[index].editedStatus);
                            expect(editingDetailsResponse.interviewer).toEqual(CaseEditInformationListMockObject[index].interviewer);
                            expect(editingDetailsResponse.editUrl).toEqual('');
                            expect(editingDetailsResponse.readOnlyUrl).toEqual('');
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    });
});

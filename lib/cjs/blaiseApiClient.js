"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var blaise_iap_node_provider_1 = __importDefault(require("blaise-iap-node-provider"));
var users = __importStar(require("./functions/userFunctions"));
var questionnaires = __importStar(require("./functions/questionnaireFunctions"));
var cases = __importStar(require("./functions/caseFunctions"));
var diagnostics = __importStar(require("./functions/diagnosticFunctions"));
var daybatch = __importStar(require("./functions/daybatchFunctions"));
var reports = __importStar(require("./functions/questionnaireReportFunctions"));
var BlaiseApiClient = /** @class */ (function () {
    function BlaiseApiClient(blaiseApiUrl, config) {
        this.getUser = users.getUser;
        this.getUsers = users.getUsers;
        this.validatePassword = users.validatePassword;
        this.createUser = users.createUser;
        this.deleteUser = users.deleteUser;
        this.getUserRoles = users.getUserRoles;
        this.changePassword = users.changePassword;
        this.changeUserRole = users.changeUserRole;
        this.changeUserServerParks = users.changeUserServerParks;
        this.getAllQuestionnairesWithCatiData = questionnaires.getAllQuestionnairesWithCatiData;
        this.getQuestionnairesWithCatiData = questionnaires.getQuestionnairesWithCatiData;
        this.getQuestionnaireWithCatiData = questionnaires.getQuestionnaireWithCatiData;
        this.getQuestionnaires = questionnaires.getQuestionnaires;
        this.questionnaireExists = questionnaires.questionnaireExists;
        this.doesQuestionnaireHaveMode = questionnaires.doesQuestionnaireHaveMode;
        this.getQuestionnaire = questionnaires.getQuestionnaire;
        this.installQuestionnaire = questionnaires.installQuestionnaire;
        this.deleteQuestionnaire = questionnaires.deleteQuestionnaire;
        this.getQuestionnaireCaseIds = questionnaires.getQuestionnaireCaseIds;
        this.getQuestionnaireModes = questionnaires.getQuestionnaireModes;
        this.getQuestionnaireSettings = questionnaires.getQuestionnaireSettings;
        this.activateQuestionnaire = questionnaires.activateQuestionnaire;
        this.deactivateQuestionnaire = questionnaires.deactivateQuestionnaire;
        this.getDaybatch = daybatch.getDaybatch;
        this.addDaybatch = daybatch.addDaybatch;
        this.getSurveyDays = daybatch.getSurveyDays;
        this.addSurveyDays = daybatch.addSurveyDays;
        this.getCase = cases.getCase;
        this.getCaseMultikey = cases.getCaseMultikey;
        this.addCase = cases.addCase;
        this.updateCase = cases.updateCase;
        this.addCaseMultikey = cases.addCaseMultikey;
        this.getMultikeyQueryString = cases.getMultikeyQueryString;
        this.getCaseStatus = cases.getCaseStatus;
        this.getCaseEditInformation = cases.getCaseEditInformation;
        this.getDiagnostics = diagnostics.getDiagnostics;
        this.getQuestionnaireReportData = reports.getQuestionnaireReportData;
        this.blaiseApiUrl = blaiseApiUrl;
        this.httpClient = axios_1.default.create();
        if ((config === null || config === void 0 ? void 0 : config.timeoutInMs) !== undefined) {
            this.httpClient.defaults.timeout = config.timeoutInMs;
        }
        if (config === null || config === void 0 ? void 0 : config.blaiseApiClientId) {
            this.blaiseIapProvider = new blaise_iap_node_provider_1.default(config.blaiseApiClientId);
        }
    }
    // eslint-disable-next-line class-methods-use-this
    BlaiseApiClient.prototype.url = function (url) {
        var formattedUrl = url;
        if (!formattedUrl.startsWith('/')) {
            formattedUrl = "/".concat(formattedUrl);
        }
        return formattedUrl;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BlaiseApiClient.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosConfig()];
                    case 1:
                        config = _a.sent();
                        return [4 /*yield*/, this.httpClient.get("".concat(this.blaiseApiUrl).concat(this.url(url)), config)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BlaiseApiClient.prototype.post = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var config, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosConfig()];
                    case 1:
                        config = _a.sent();
                        return [4 /*yield*/, this.httpClient.post("".concat(this.blaiseApiUrl).concat(this.url(url)), data, config)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BlaiseApiClient.prototype.delete = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosConfig()];
                    case 1:
                        config = _a.sent();
                        return [4 /*yield*/, this.httpClient.delete("".concat(this.blaiseApiUrl).concat(this.url(url)), config)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BlaiseApiClient.prototype.patch = function (url, data) {
        if (data === void 0) { data = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var config, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosConfig()];
                    case 1:
                        config = _a.sent();
                        return [4 /*yield*/, this.httpClient.patch("".concat(this.blaiseApiUrl).concat(this.url(url)), data, config)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    BlaiseApiClient.prototype.axiosConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        config = {};
                        if (!this.blaiseIapProvider) return [3 /*break*/, 2];
                        _a = {};
                        return [4 /*yield*/, this.blaiseIapProvider.getAuthHeader()];
                    case 1:
                        config = (_a.headers = _b.sent(), _a);
                        _b.label = 2;
                    case 2: return [2 /*return*/, config];
                }
            });
        });
    };
    return BlaiseApiClient;
}());
exports.default = BlaiseApiClient;
__exportStar(require("./interfaces/questionnaire"), exports);
__exportStar(require("./interfaces/diagnostic"), exports);
__exportStar(require("./interfaces/case"), exports);
__exportStar(require("./interfaces/user"), exports);
__exportStar(require("./interfaces/daybatch"), exports);
__exportStar(require("./interfaces/questionnaireReport"), exports);
__exportStar(require("./enums/caseOutcome"), exports);
__exportStar(require("./enums/editedStatus"), exports);
__exportStar(require("./types/caseData"), exports);
__exportStar(require("./types/surveyDays"), exports);
__exportStar(require("./mockObjects/caseMockObjects"), exports);
__exportStar(require("./mockObjects/diagnosticMockObjects"), exports);
__exportStar(require("./mockObjects/questionnaireMockObjects"), exports);
__exportStar(require("./mockObjects/userMockObjects"), exports);
__exportStar(require("./mockObjects/daybatchMockObjects"), exports);
__exportStar(require("./mockObjects/questionnaireReportMockObjects"), exports);

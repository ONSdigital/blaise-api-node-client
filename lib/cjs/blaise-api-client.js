"use strict";
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
        while (_) try {
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
exports.Outcome = exports.InstrumentSettingsMockList = exports.InstallInstrumentResponseMockObject = exports.InstallInstrumentMockObject = exports.InstrumentMockObject = exports.InstrumentListMockObject = exports.DiagnosticMockObject = void 0;
var axios_1 = __importDefault(require("axios"));
var instrument_1 = require("./interfaces/instrument");
Object.defineProperty(exports, "Outcome", { enumerable: true, get: function () { return instrument_1.Outcome; } });
var diagnostic_mock_objects_1 = require("./mock-objects/diagnostic-mock-objects");
Object.defineProperty(exports, "DiagnosticMockObject", { enumerable: true, get: function () { return diagnostic_mock_objects_1.DiagnosticMockObject; } });
var instrument_mock_objects_1 = require("./mock-objects/instrument-mock-objects");
Object.defineProperty(exports, "InstrumentListMockObject", { enumerable: true, get: function () { return instrument_mock_objects_1.InstrumentListMockObject; } });
Object.defineProperty(exports, "InstrumentMockObject", { enumerable: true, get: function () { return instrument_mock_objects_1.InstrumentMockObject; } });
Object.defineProperty(exports, "InstallInstrumentMockObject", { enumerable: true, get: function () { return instrument_mock_objects_1.InstallInstrumentMockObject; } });
Object.defineProperty(exports, "InstallInstrumentResponseMockObject", { enumerable: true, get: function () { return instrument_mock_objects_1.InstallInstrumentResponseMockObject; } });
Object.defineProperty(exports, "InstrumentSettingsMockList", { enumerable: true, get: function () { return instrument_mock_objects_1.InstrumentSettingsMockList; } });
var blaise_iap_node_provider_1 = __importDefault(require("blaise-iap-node-provider"));
var BlaiseApiClient = /** @class */ (function () {
    function BlaiseApiClient(blaiseApiUrl, config) {
        this.blaiseApiUrl = blaiseApiUrl;
        this.httpClient = axios_1.default.create();
        if ((config === null || config === void 0 ? void 0 : config.timeoutInMs) !== undefined) {
            this.httpClient.defaults.timeout = config.timeoutInMs;
        }
        if (config === null || config === void 0 ? void 0 : config.blaiseApiClientId) {
            this.blaiseIapProvider = new blaise_iap_node_provider_1.default(config.blaiseApiClientId);
        }
    }
    BlaiseApiClient.prototype.getAllInstrumentsWithCatiData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/cati/instruments")];
            });
        });
    };
    BlaiseApiClient.prototype.getInstrumentsWithCatiData = function (serverpark) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/cati/serverparks/" + serverpark + "/instruments")];
            });
        });
    };
    BlaiseApiClient.prototype.getInstrumentWithCatiData = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/cati/serverparks/" + serverpark + "/instruments/" + instrumentName)];
            });
        });
    };
    BlaiseApiClient.prototype.getInstruments = function (serverpark) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments")];
            });
        });
    };
    BlaiseApiClient.prototype.instrumentExists = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/exists")];
            });
        });
    };
    BlaiseApiClient.prototype.doesInstrumentHaveMode = function (serverpark, instrumentName, mode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/modes/" + mode)];
            });
        });
    };
    BlaiseApiClient.prototype.getInstrument = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName)];
            });
        });
    };
    BlaiseApiClient.prototype.installInstrument = function (serverpark, instrument) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post("/api/v1/serverparks/" + serverpark + "/instruments", instrument)];
            });
        });
    };
    BlaiseApiClient.prototype.deleteInstrument = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.delete("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "?name=" + instrumentName)];
            });
        });
    };
    BlaiseApiClient.prototype.getInstrumentCaseIds = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/cases/ids")];
            });
        });
    };
    BlaiseApiClient.prototype.getDiagnostics = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/health/diagnosis")];
            });
        });
    };
    BlaiseApiClient.prototype.getInstrumentModes = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/modes")];
            });
        });
    };
    BlaiseApiClient.prototype.getInstrumentSettings = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/settings")];
            });
        });
    };
    BlaiseApiClient.prototype.getDaybatch = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("/api/v1/cati/serverparks/" + serverpark + "/instruments/" + instrumentName + "/daybatch")];
            });
        });
    };
    BlaiseApiClient.prototype.addDaybatch = function (serverpark, instrumentName, daybatchSettings) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post("/api/v1/cati/serverparks/" + serverpark + "/instruments/" + instrumentName + "/daybatch", daybatchSettings)];
            });
        });
    };
    BlaiseApiClient.prototype.getSurveyDays = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("api/v1/cati/serverparks/" + serverpark + "/instruments/" + instrumentName + "/surveydays")];
            });
        });
    };
    BlaiseApiClient.prototype.addSurveyDays = function (serverpark, instrumentName, surveyDays) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                surveyDays = surveyDays.map(function (surveyDay) {
                    if (surveyDay instanceof Date) {
                        return surveyDay.toISOString();
                    }
                    return surveyDay;
                });
                return [2 /*return*/, this.post("api/v1/cati/serverparks/" + serverpark + "/instruments/" + instrumentName + "/surveydays", surveyDays)];
            });
        });
    };
    BlaiseApiClient.prototype.getCase = function (serverpark, instrumentName, caseID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/cases/" + caseID)];
            });
        });
    };
    BlaiseApiClient.prototype.addCase = function (serverpark, instrumentName, caseID, caseFields) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post("api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/cases/" + caseID, caseFields)];
            });
        });
    };
    BlaiseApiClient.prototype.activateInstrument = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.patch("api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/activate")];
            });
        });
    };
    BlaiseApiClient.prototype.deactivateInstrument = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.patch("api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/deactivate")];
            });
        });
    };
    BlaiseApiClient.prototype.getCaseStatus = function (serverpark, instrumentName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("api/v1/serverparks/" + serverpark + "/instruments/" + instrumentName + "/cases/status")];
            });
        });
    };
    BlaiseApiClient.prototype.url = function (url) {
        if (!url.startsWith("/")) {
            url = "/" + url;
        }
        return url;
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
                        return [4 /*yield*/, this.httpClient.get("" + this.blaiseApiUrl + this.url(url), config)];
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
                        return [4 /*yield*/, this.httpClient.post("" + this.blaiseApiUrl + this.url(url), data, config)];
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
                        return [4 /*yield*/, this.httpClient.delete("" + this.blaiseApiUrl + this.url(url), config)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BlaiseApiClient.prototype.patch = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var config, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosConfig()];
                    case 1:
                        config = _a.sent();
                        return [4 /*yield*/, this.httpClient.patch("" + this.blaiseApiUrl + this.url(url), config)];
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

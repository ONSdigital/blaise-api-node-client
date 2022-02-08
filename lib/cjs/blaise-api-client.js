"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.Outcome = exports.instrumentMocks = exports.diagonisticsMocks = void 0;
var axios_1 = __importDefault(require("axios"));
var instrumentsTypes = __importStar(require("./interfaces/instruments"));
var diagnosticsTypes = __importStar(require("./interfaces/diagnostics"));
var casesTypes = __importStar(require("./interfaces/cases"));
var cases_1 = require("./interfaces/cases");
Object.defineProperty(exports, "Outcome", { enumerable: true, get: function () { return cases_1.Outcome; } });
var userTypes = __importStar(require("./interfaces/users"));
var diagonisticsMocks = __importStar(require("./mock-objects/diagnostic-mock-objects"));
exports.diagonisticsMocks = diagonisticsMocks;
var instrumentMocks = __importStar(require("./mock-objects/instrument-mock-objects"));
exports.instrumentMocks = instrumentMocks;
var blaise_iap_node_provider_1 = __importDefault(require("blaise-iap-node-provider"));
var users = __importStar(require("./blaise-api-client/users"));
var instruments = __importStar(require("./blaise-api-client/instruments"));
var cases = __importStar(require("./blaise-api-client/cases"));
var diagnostics = __importStar(require("./blaise-api-client/diagnostics"));
var BlaiseApiClient = /** @class */ (function () {
    function BlaiseApiClient(blaiseApiUrl, config) {
        this.getUser = users.getUser;
        this.validatePassword = users.validatePassword;
        this.createUser = users.createUser;
        this.deleteUser = users.deleteUser;
        this.getAllInstrumentsWithCatiData = instruments.getAllInstrumentsWithCatiData;
        this.getInstrumentsWithCatiData = instruments.getInstrumentsWithCatiData;
        this.getInstrumentWithCatiData = instruments.getInstrumentWithCatiData;
        this.getInstruments = instruments.getInstruments;
        this.instrumentExists = instruments.instrumentExists;
        this.doesInstrumentHaveMode = instruments.doesInstrumentHaveMode;
        this.getInstrument = instruments.getInstrument;
        this.installInstrument = instruments.installInstrument;
        this.deleteInstrument = instruments.deleteInstrument;
        this.getInstrumentCaseIds = instruments.getInstrumentCaseIds;
        this.getInstrumentModes = instruments.getInstrumentModes;
        this.getInstrumentSettings = instruments.getInstrumentSettings;
        this.getDaybatch = instruments.getDaybatch;
        this.addDaybatch = instruments.addDaybatch;
        this.getSurveyDays = instruments.getSurveyDays;
        this.addSurveyDays = instruments.addSurveyDays;
        this.getCase = cases.getCase;
        this.addCase = cases.addCase;
        this.activateInstrument = cases.activateInstrument;
        this.deactivateInstrument = cases.deactivateInstrument;
        this.getCaseStatus = cases.getCaseStatus;
        this.getDiagnostics = diagnostics.getDiagnostics;
        this.blaiseApiUrl = blaiseApiUrl;
        this.httpClient = axios_1.default.create();
        if ((config === null || config === void 0 ? void 0 : config.timeoutInMs) !== undefined) {
            this.httpClient.defaults.timeout = config.timeoutInMs;
        }
        if (config === null || config === void 0 ? void 0 : config.blaiseApiClientId) {
            this.blaiseIapProvider = new blaise_iap_node_provider_1.default(config.blaiseApiClientId);
        }
    }
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

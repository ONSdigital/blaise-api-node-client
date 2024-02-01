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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateQuestionnaire = exports.activateQuestionnaire = exports.getQuestionnaireSettings = exports.getQuestionnaireModes = exports.getQuestionnaireCaseIds = exports.deleteQuestionnaire = exports.installQuestionnaire = exports.getQuestionnaire = exports.doesQuestionnaireHaveMode = exports.questionnaireExists = exports.getQuestionnaires = exports.getQuestionnaireWithCatiData = exports.getQuestionnairesWithCatiData = exports.getAllQuestionnairesWithCatiData = void 0;
function getAllQuestionnairesWithCatiData() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get('/api/v2/cati/questionnaires')];
        });
    });
}
exports.getAllQuestionnairesWithCatiData = getAllQuestionnairesWithCatiData;
function getQuestionnairesWithCatiData(serverpark) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/cati/serverparks/" + serverpark + "/questionnaires")];
        });
    });
}
exports.getQuestionnairesWithCatiData = getQuestionnairesWithCatiData;
function getQuestionnaireWithCatiData(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/cati/serverparks/" + serverpark + "/questionnaires/" + questionnaireName)];
        });
    });
}
exports.getQuestionnaireWithCatiData = getQuestionnaireWithCatiData;
function getQuestionnaires(serverpark) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires")];
        });
    });
}
exports.getQuestionnaires = getQuestionnaires;
function questionnaireExists(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/exists")];
        });
    });
}
exports.questionnaireExists = questionnaireExists;
function doesQuestionnaireHaveMode(serverpark, questionnaireName, mode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/modes/" + mode)];
        });
    });
}
exports.doesQuestionnaireHaveMode = doesQuestionnaireHaveMode;
function getQuestionnaire(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName)];
        });
    });
}
exports.getQuestionnaire = getQuestionnaire;
function installQuestionnaire(serverpark, questionnaire) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.post("/api/v2/serverparks/" + serverpark + "/questionnaires", questionnaire)];
        });
    });
}
exports.installQuestionnaire = installQuestionnaire;
function deleteQuestionnaire(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.delete("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "?name=" + questionnaireName)];
        });
    });
}
exports.deleteQuestionnaire = deleteQuestionnaire;
function getQuestionnaireCaseIds(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/cases/ids")];
        });
    });
}
exports.getQuestionnaireCaseIds = getQuestionnaireCaseIds;
function getQuestionnaireModes(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/modes")];
        });
    });
}
exports.getQuestionnaireModes = getQuestionnaireModes;
function getQuestionnaireSettings(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.get("/api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/settings")];
        });
    });
}
exports.getQuestionnaireSettings = getQuestionnaireSettings;
function activateQuestionnaire(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.patch("api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/activate")];
        });
    });
}
exports.activateQuestionnaire = activateQuestionnaire;
function deactivateQuestionnaire(serverpark, questionnaireName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, this.patch("api/v2/serverparks/" + serverpark + "/questionnaires/" + questionnaireName + "/deactivate")];
        });
    });
}
exports.deactivateQuestionnaire = deactivateQuestionnaire;

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
import BlaiseApiClient from '../blaiseApiClient';
import { CreateUserMockObject, CreateUserResponseMockObject } from '../mockObjects/userMockObjects';
var mock = new MockAdapter(axios, { onNoMatch: 'throwException' });
var blaiseApiUrl = 'testUri';
var blaiseApiClient = new BlaiseApiClient("http://".concat(blaiseApiUrl));
describe('blaiseApiClient users', function () {
    describe('get user', function () {
        var username = 'test-user';
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/users/").concat(username)).reply(200, {
                name: username,
                role: 'DST',
                serverParks: ['gusty'],
                defaultServerPark: 'gusty',
            });
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns the user details', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getUser(username)];
                    case 1:
                        result = _a.sent();
                        expect(result.name).toEqual(username);
                        expect(result.role).toEqual('DST');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get users', function () {
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/users")).reply(200, [
                {
                    name: 'test-user',
                    role: 'DST',
                    serverParks: ['gusty'],
                    defaultServerPark: 'gusty',
                },
            ]);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns the user details', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getUsers()];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual([
                            {
                                name: 'test-user',
                                role: 'DST',
                                serverParks: ['gusty'],
                                defaultServerPark: 'gusty',
                            },
                        ]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('validate password - valid', function () {
        var username = 'test-user';
        var password = 'test-password';
        beforeEach(function () {
            mock.onPost("http://".concat(blaiseApiUrl, "/api/v2/users/").concat(username, "/validate")).reply(200, true);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns true', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, blaiseApiClient.validatePassword(username, password)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeTruthy();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('validate password - invalid', function () {
        var username = 'test-user';
        var password = 'test-password';
        beforeEach(function () {
            mock.onPost("http://".concat(blaiseApiUrl, "/api/v2/users/").concat(username, "/validate")).reply(200, false);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns false', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, blaiseApiClient.validatePassword(username, password)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeFalsy();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('create user', function () {
        beforeEach(function () {
            mock.onPost("http://".concat(blaiseApiUrl, "/api/v2/users")).reply(201, CreateUserResponseMockObject);
        });
        afterEach(function () {
            mock.reset();
        });
        it('creates a user and returns a response', function () { return __awaiter(void 0, void 0, void 0, function () {
            var createUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.createUser(CreateUserMockObject)];
                    case 1:
                        createUser = _a.sent();
                        expect(createUser.name).toEqual('Beyonce');
                        expect(createUser.role).toEqual('DST');
                        expect(createUser.serverParks).toHaveLength(1);
                        expect(createUser.defaultServerPark).toEqual('gusty');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('delete user', function () {
        var userName = 'Beyonce';
        beforeEach(function () {
            mock.onDelete("http://".concat(blaiseApiUrl, "/api/v2/users/").concat(userName)).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('deletes a user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.deleteUser(userName)];
                    case 1:
                        result = _a.sent();
                        expect(result).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('get user roles', function () {
        beforeEach(function () {
            mock.onGet("http://".concat(blaiseApiUrl, "/api/v2/userroles")).reply(200, [
                {
                    name: 'test-role',
                    description: 'test',
                    permissions: ['test'],
                },
            ]);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns the user details', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, blaiseApiClient.getUserRoles()];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual([
                            {
                                name: 'test-role',
                                description: 'test',
                                permissions: ['test'],
                            },
                        ]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('change password ', function () {
        var username = 'test-user';
        var password = 'test-password';
        beforeEach(function () {
            mock.onPatch("http://".concat(blaiseApiUrl, "/api/v2/users/").concat(username, "/password")).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns null', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, blaiseApiClient.changePassword(username, password)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('change user role ', function () {
        var username = 'test-user';
        var role = 'test-role';
        beforeEach(function () {
            mock.onPatch("http://".concat(blaiseApiUrl, "/api/v2/users/").concat(username, "/role")).reply(204, null);
        });
        afterEach(function () {
            mock.reset();
        });
        it('returns null', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, blaiseApiClient.changeUserRole(username, role)];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toBeNull();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditedStatus = void 0;
// eslint-disable-next-line no-shadow
var EditedStatus;
(function (EditedStatus) {
    EditedStatus[EditedStatus["NotStarted"] = 0] = "NotStarted";
    EditedStatus[EditedStatus["Started"] = 1] = "Started";
    EditedStatus[EditedStatus["Query"] = 2] = "Query";
    EditedStatus[EditedStatus["Finished"] = 3] = "Finished";
})(EditedStatus = exports.EditedStatus || (exports.EditedStatus = {}));
exports.default = EditedStatus;

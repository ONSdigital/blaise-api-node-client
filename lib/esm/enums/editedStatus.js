// eslint-disable-next-line no-shadow
export var EditedStatus;
(function (EditedStatus) {
    EditedStatus[EditedStatus["NotStarted"] = 0] = "NotStarted";
    EditedStatus[EditedStatus["Started"] = 1] = "Started";
    EditedStatus[EditedStatus["Query"] = 2] = "Query";
    EditedStatus[EditedStatus["Finished"] = 3] = "Finished";
})(EditedStatus || (EditedStatus = {}));
export default EditedStatus;

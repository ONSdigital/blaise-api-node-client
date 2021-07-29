"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installInstrumentResponseMockObject = exports.installInstrumentMockObject = exports.instrumentMockObject = exports.instrumentListMockObject = void 0;
exports.instrumentListMockObject = [{
        name: "OPN2101A",
        serverParkName: "gusty",
        installDate: "2021-01-15T14:41:29.4399898+00:00",
        status: "Active",
        dataRecordCount: 0,
        hasData: false,
        active: false,
    }, {
        name: "OPN2007T",
        serverParkName: "gusty",
        installDate: "2021-01-15T15:18:40.1503617+00:00",
        status: "Active",
        dataRecordCount: 10,
        hasData: true,
        active: true,
    }, {
        name: "LMS2101_AA1",
        serverParkName: "gusty",
        installDate: "2021-01-15T15:26:43.4233454+00:00",
        status: "Active",
        dataRecordCount: 0,
        hasData: false,
        active: false,
    }];
exports.instrumentMockObject = {
    name: "OPN2101A",
    serverParkName: "gusty",
    installDate: "2021-01-15T14:41:29.4399898+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
};
exports.installInstrumentMockObject = {
    instrumentName: "OPN2004A",
    instrumentFile: "OPN2004A.bpkg",
    bucketPath: "/"
};
exports.installInstrumentResponseMockObject = {
    instrumentFile: "OPN2004A.bpkg"
};

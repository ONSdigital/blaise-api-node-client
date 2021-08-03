"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallInstrumentResponseMockObject = exports.InstallInstrumentMockObject = exports.InstrumentMockObject = exports.InstrumentListMockObject = void 0;
exports.InstrumentListMockObject = [{
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
exports.InstrumentMockObject = {
    name: "OPN2101A",
    serverParkName: "gusty",
    installDate: "2021-01-15T14:41:29.4399898+00:00",
    status: "Active",
    dataRecordCount: 0,
    hasData: false,
    active: false,
};
exports.InstallInstrumentMockObject = {
    instrumentName: "OPN2004A",
    instrumentFile: "OPN2004A.bpkg",
    bucketPath: "/"
};
exports.InstallInstrumentResponseMockObject = {
    instrumentFile: "OPN2004A.bpkg"
};
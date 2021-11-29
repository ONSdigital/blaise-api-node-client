import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import 'regenerator-runtime/runtime'
import BlaiseApiClient from "../src/blaise-api-client";
import {
    InstrumentListMockObject,
    InstrumentMockObject,
    InstallInstrumentMockObject,
    InstallInstrumentResponseMockObject, InstrumentSettingsMockList,
    InstrumentDaybatchCasesMock, AddDaybatchMock,
    SurveyDaysMock, SurveyDaysDatesMock
} from "../src/mock-objects/instrument-mock-objects";

const mock = new MockAdapter(axios, {onNoMatch: "throwException"});
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient", () => {
    describe("get all instruments with Cati data", () => {
        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/instruments`).reply(200,
                InstrumentListMockObject,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns a list of all instruments including CATI data", async () => {
            let instruments = await blaiseApiClient.getAllInstrumentsWithCatiData();

            expect(instruments).toEqual(InstrumentListMockObject);
        });
    });

    describe("get instruments with Cati data", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments`).reply(200,
                InstrumentListMockObject,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns a list of all instruments including CATI data within a serverpark", async () => {
            let instruments = await blaiseApiClient.getInstrumentsWithCatiData(serverpark);

            expect(instruments).toEqual(InstrumentListMockObject);
        });
    });

    describe("get instrument with Cati data", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${InstrumentMockObject.name}`).reply(200,
                InstrumentMockObject,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns an instrument including CATI data", async () => {
            let instrument = await blaiseApiClient.getInstrumentWithCatiData(serverpark, InstrumentMockObject.name);

            expect(instrument).toEqual(InstrumentMockObject);
        });
    });

    describe("get instruments", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments`).reply(200,
                InstrumentListMockObject,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns a list of instruments in a serverpark", async () => {
            let instruments = await blaiseApiClient.getInstruments(serverpark);

            expect(instruments).toEqual(InstrumentListMockObject);
        });
    });

    describe("get instrument", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${InstrumentMockObject.name}`).reply(200,
                InstrumentMockObject,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns an instrument", async () => {
            let instrument = await blaiseApiClient.getInstrument(serverpark, InstrumentMockObject.name);

            expect(instrument).toEqual(InstrumentMockObject);
        });
    });

    describe("get whether instrument exists", () => {
        const serverpark = "test";
        const instrumentInstalled = "OPN2101A";
        const instrumentNotInstalled = "OPN2102B";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentInstalled}/exists`).reply(200, true,);
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentNotInstalled}/exists`).reply(200, false,);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns true if it exists", async () => {
            let exists = await blaiseApiClient.instrumentExists(serverpark, instrumentInstalled);

            expect(exists).toEqual(true);
        });

        it("returns false if it does not exist", async () => {
            let exists = await blaiseApiClient.instrumentExists(serverpark, instrumentNotInstalled);

            expect(exists).toEqual(false);
        });
    });

    describe("get whether instrument has mode", () => {
        const serverpark = "test";
        const hasMode = "CATI";
        const doesntHaveMode = "WEB";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${InstrumentMockObject.name}/modes/${hasMode}`).reply(200, true,);
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${InstrumentMockObject.name}/modes/${doesntHaveMode}`).reply(200, false,);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns true if instrument has mode", async () => {
            let exists = await blaiseApiClient.doesInstrumentHaveMode(serverpark, InstrumentMockObject.name, hasMode);

            expect(exists).toEqual(true);
        });

        it("returns false if instrument does not have mode", async () => {
            let exists = await blaiseApiClient.doesInstrumentHaveMode(serverpark, InstrumentMockObject.name, doesntHaveMode);

            expect(exists).toEqual(false);
        });
    });

    describe("installInstrument", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onPost(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments`).reply(201,
                InstallInstrumentResponseMockObject,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("installs an instrument and returns the instrument file", async () => {
            let instrument = await blaiseApiClient.installInstrument(serverpark, InstallInstrumentMockObject);

            expect(instrument).toEqual(InstallInstrumentResponseMockObject);
        });
    });

    describe("delete instrument", () => {
        const serverpark = "test";
        const instrumentName = "OPN2004A";

        beforeEach(() => {
            mock.onDelete(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentName}?name=${instrumentName}`).reply(204,
                null,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("deletes an instrument", async () => {
            let result = await blaiseApiClient.deleteInstrument(serverpark, instrumentName);

            expect(result).toBeNull();
        });
    });

    describe("get a list of case ids for in instrument", () => {
        const serverpark = "test";
        const instrumentInstalled = "OPN2101A";
        const instrumentNotInstalled = "OPN2102B";

        const expectedCaseIds = ["100002", "100003"];

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentInstalled}/cases/ids`).reply(200, expectedCaseIds);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns expected list of ids", async () => {
            let caseIds = await blaiseApiClient.getInstrumentCaseIds(serverpark, instrumentInstalled);

            expect(caseIds).toEqual(expectedCaseIds);
        });
    });

    describe("get instrument modes", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${InstrumentMockObject.name}/modes`).reply(200, ["CATI", "CAWI"]);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns list of modes for instrument", async () => {
            let exists = await blaiseApiClient.getInstrumentModes(serverpark, InstrumentMockObject.name);

            expect(exists).toContain("CATI", "CAWI");
        });

    });

    describe("get instrument settings", () => {
        const serverpark = "test";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${InstrumentMockObject.name}/settings`).reply(200, InstrumentSettingsMockList);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns list of settings for instrument", async () => {
            let exists = await blaiseApiClient.getInstrumentSettings(serverpark, InstrumentMockObject.name);

            expect(exists).toEqual(InstrumentSettingsMockList);
        });

    });


    describe("get daybatch", () => {
        const serverpark = "test";
        const instrumentName = "dst2108t";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/daybatch`).reply(200, InstrumentDaybatchCasesMock);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns a list of case IDs in the current daybatch", async () => {
            let daybatch = await blaiseApiClient.getDaybatch(serverpark, instrumentName);

            expect(daybatch).toEqual(InstrumentDaybatchCasesMock);
        });
    })

    describe("add daybatch", () => {
        const serverpark = "test";
        const instrumentName = "dst2108t";

        beforeEach(() => {
            mock.onPost(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/daybatch`).reply(201,
                InstrumentDaybatchCasesMock,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("installs an instrument and returns the instrument file", async () => {
            let daybatch = await blaiseApiClient.addDaybatch(serverpark, instrumentName, AddDaybatchMock);

            expect(daybatch).toEqual(InstrumentDaybatchCasesMock);
        });
    })

    describe("get survey days", () => {
        const serverpark = "test";
        const instrumentName = "dst2108t";

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/surveydays`).reply(200, SurveyDaysMock);
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns a list of surveydays", async () => {
            let surveyDays = await blaiseApiClient.getSurveyDays(serverpark, instrumentName);

            expect(surveyDays).toEqual(SurveyDaysMock);
        });
    })

    describe("add survey days", () => {
        const serverpark = "test";
        const instrumentName = "dst2108t";

        beforeEach(() => {
            mock.onPost(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentName}/surveydays`).reply(201,
                SurveyDaysMock,
            );
        });

        afterEach(() => {
            mock.reset();
        });

        it("adds surveydays by strings", async () => {
            let surveyDays = await blaiseApiClient.addSurveyDays(serverpark, instrumentName, SurveyDaysMock);

            expect(surveyDays).toEqual(SurveyDaysMock);
        });


        it("adds surveydays by dates", async () => {
            let surveyDays = await blaiseApiClient.addSurveyDays(serverpark, instrumentName, SurveyDaysDatesMock);

            expect(surveyDays).toEqual(SurveyDaysMock);
        });
    })

    describe("get case", () => {
        const serverpark = "test";
        const instrumentName = "dst2108t";
        const caseID = "100101;"

        beforeEach(() => {
            mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/${caseID}`).reply(200, {
                caseID: caseID,
                fieldData: {}
            });
        });

        afterEach(() => {
            mock.reset();
        });

        it("returns a case", async () => {
            let caseResponse = await blaiseApiClient.getCase(serverpark, instrumentName, caseID);

            expect(caseResponse.caseID).toEqual(caseID);
            expect(caseResponse.fieldData).toEqual({});
        });
    })

    describe("add case", () => {
        const serverpark = "test";
        const instrumentName = "dst2108t";
        const caseID = "100101;"

        beforeEach(() => {
            mock.onPost(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentName}/cases/${caseID}`).reply(200, {
                caseID: caseID,
                fieldData: {}
            });
        });

        afterEach(() => {
            mock.reset();
        });

        it("adds a case", async () => {
            let caseResponse = await blaiseApiClient.addCase(serverpark, instrumentName, caseID, {});

            expect(caseResponse.caseID).toEqual(caseID);
            expect(caseResponse.fieldData).toEqual({});
        });
    })
});

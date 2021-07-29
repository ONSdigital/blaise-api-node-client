import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import 'regenerator-runtime/runtime'
import BlaiseApiClient from "../src/blaise-api-client";
import {instrumentListMockObject, instrumentMockObject, installInstrumentMockObject, installInstrumentResponseMockObject} from "../src/mock-objects/instrument-mock-objects";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri"

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("BlaiseRestapiClient", () => {
  describe("get all instruments with Cati data", () => {
    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/instruments`).reply(200,
        instrumentListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of all instruments including CATI data", async () => {
      let instruments = await blaiseApiClient.getAllInstrumentsWithCatiData();

      expect(instruments).toEqual(instrumentListMockObject);
    });
  });

  describe("get instruments with Cati data", () => {
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments`).reply(200,
        instrumentListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of all instruments including CATI data within a serverpark", async () => {
      let instruments = await blaiseApiClient.getInstrumentsWithCatiData(serverpark);

      expect(instruments).toEqual(instrumentListMockObject);
    });
  });

  describe("get instrument with Cati data", () => {
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${instrumentMockObject.name}`).reply(200,
        instrumentMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an instrument including CATI data", async () => {
      let instrument = await blaiseApiClient.getInstrumentWithCatiData(serverpark, instrumentMockObject.name);

      expect(instrument).toEqual(instrumentMockObject);
    });
  });

  describe("get instruments", () => {
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments`).reply(200,
        instrumentListMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of instruments in a serverpark", async () => {
      let instruments = await blaiseApiClient.getInstruments(serverpark);

      expect(instruments).toEqual(instrumentListMockObject);
    });
  });

  describe("get instrument", () => {
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentMockObject.name}`).reply(200,
        instrumentMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an instrument", async () => {
      let instrument = await blaiseApiClient.getInstrument(serverpark, instrumentMockObject.name);

      expect(instrument).toEqual(instrumentMockObject);
    });
  });

  describe("get whether instrument exists", () => {
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${instrumentMockObject.name}/exists`).reply(200,
        true,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an instrument", async () => {
      let exists = await blaiseApiClient.instrumentExists(serverpark, instrumentMockObject.name);

      expect(exists).toEqual(true);
    });
  });

  describe("installInstrument", () => {
    const serverpark = "test";

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments`).reply(201,
        installInstrumentResponseMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("installs an instrument and returns the instrument file", async () => {
      let instrument = await blaiseApiClient.installInstrument(serverpark, installInstrumentMockObject);

      expect(instrument).toEqual(installInstrumentResponseMockObject);
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
});

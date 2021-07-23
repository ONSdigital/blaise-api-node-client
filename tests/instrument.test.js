import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import 'regenerator-runtime/runtime'
import BlaiseApiClient from "../src/blaise-api-client";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri"

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("BlaiseRestapiClient", () => {
  describe("getAllInstrumentsWithCatiData", () => {
    const apiInstrumentList = [
      {
        activeToday: true,
        expired: false,
        installDate: "2020-12-11T11:53:55.5612856+00:00",
        name: "OPN2007T",
        serverParkName: "LocalDevelopment"
      },
      {
        activeToday: false,
        expired: false,
        installDate: "2020-12-11T11:53:55.5612856+00:00",
        name: "OPN2004A",
        serverParkName: "LocalDevelopment"
      }
    ];

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/instruments`).reply(200,
        apiInstrumentList,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of all instruments including CATI data", async () => {
      let instruments = await blaiseApiClient.getAllInstrumentsWithCatiData();

      expect(instruments).toEqual(apiInstrumentList);
    });
  });


  describe("getInstrumentsWithCatiData", () => {
    const apiInstrumentList = [
      {
        activeToday: true,
        expired: false,
        installDate: "2020-12-11T11:53:55.5612856+00:00",
        name: "OPN2007T",
        serverParkName: "LocalDevelopment"
      },
      {
        activeToday: false,
        expired: false,
        installDate: "2020-12-11T11:53:55.5612856+00:00",
        name: "OPN2004A",
        serverParkName: "LocalDevelopment"
      }
    ];
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments`).reply(200,
        apiInstrumentList,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of all instruments including CATI data within a serverpark", async () => {
      let instruments = await blaiseApiClient.getInstrumentsWithCatiData(serverpark);

      expect(instruments).toEqual(apiInstrumentList);
    });
  });

  describe("getInstrumentWithCatiData", () => {
    const apiInstrument = {
      activeToday: false,
      expired: false,
      installDate: "2020-12-11T11:53:55.5612856+00:00",
      name: "OPN2004A",
      serverParkName: "LocalDevelopment"
    };
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/cati/serverparks/${serverpark}/instruments/${apiInstrument.name}`).reply(200,
        apiInstrument,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an instrument including CATI data", async () => {
      let instrument = await blaiseApiClient.getInstrumentWithCatiData(serverpark, apiInstrument.name);

      expect(instrument).toEqual(apiInstrument);
    });
  });

  describe("getInstruments", () => {
    const apiInstrumentList = [
      {
        expired: false,
        installDate: "2020-12-11T11:53:55.5612856+00:00",
        name: "OPN2007T",
        serverParkName: "LocalDevelopment"
      },
      {
        expired: false,
        installDate: "2020-12-11T11:53:55.5612856+00:00",
        name: "OPN2004A",
        serverParkName: "LocalDevelopment"
      }
    ];
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments`).reply(200,
        apiInstrumentList,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns a list of instruments in a serverpark", async () => {
      let instruments = await blaiseApiClient.getInstruments(serverpark);

      expect(instruments).toEqual(apiInstrumentList);
    });
  });

  describe("getInstrument", () => {
    const apiInstrument = {
      expired: false,
      installDate: "2020-12-11T11:53:55.5612856+00:00",
      name: "OPN2004A",
      serverParkName: "LocalDevelopment"
    };
    const serverpark = "test";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments/${apiInstrument.name}`).reply(200,
        apiInstrument,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns an instrument", async () => {
      let instrument = await blaiseApiClient.getInstrument(serverpark, apiInstrument.name);

      expect(instrument).toEqual(apiInstrument);
    });
  });

  describe("installInstrument", () => {
    const installInstrument = {
      instrumentName: "OPN2004A",
      instrumentFile: "OPN2004A.bpkg",
      bucketPath: "/"
    };
    const serverpark = "test";
    const apiInstallInstrumentResponse = {
      instrumentFile: "OPN2004A.bpkg"
    };

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v1/serverparks/${serverpark}/instruments`).reply(201,
        apiInstallInstrumentResponse,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("installs an instrument and returns the instrument file", async () => {
      let instrument = await blaiseApiClient.installInstrument(serverpark, installInstrument);

      expect(instrument).toEqual(apiInstallInstrumentResponse);
    });
  });

  describe("deleteInstrument", () => {
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
      let instrument = await blaiseApiClient.deleteInstrument(serverpark, instrumentName);

      expect(instrument).toBeNull();
    });
  });
});

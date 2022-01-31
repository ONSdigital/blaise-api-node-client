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
import { Outcome } from "../src/interfaces/instrument";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient users", () => {
  describe("get user", () => {
    const username = "test-user"

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/users/${username}`).reply(200, {
        name: username,
        role: "DST",
        serverParks: ["gusty"],
        defaultServerPark: "gusty"
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it("activates an instrument", async () => {
      let result = await blaiseApiClient.getUser(username);

      expect(result.name).toEqual(username);
      expect(result.role).toEqual("DST");
    })
  })

  describe("validate password - valid", () => {
    const username = "test-user"
    const password = "test-password"

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/users/${username}/password/${password}/validate`).reply(200, true);
    });

    afterEach(() => {
      mock.reset();
    });

    it("activates an instrument", async () => {
      expect(await blaiseApiClient.validatePassword(username, password)).toBeTruthy();
    })
  })

  describe("validate password - valid", () => {
    const username = "test-user"
    const password = "test-password"

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v1/users/${username}/password/${password}/validate`).reply(200, false);
    });

    afterEach(() => {
      mock.reset();
    });

    it("activates an instrument", async () => {
      expect(await blaiseApiClient.validatePassword(username, password)).toBeFalsy();
    })
  })
})

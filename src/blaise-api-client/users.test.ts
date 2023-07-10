import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "regenerator-runtime/runtime";
import BlaiseApiClient from "../blaise-api-client";
import { CreateUserMockObject, CreateUserResponseMockObject } from "../mock-objects/users.mock.objects";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiUrl = "testUri";

const blaiseApiClient = new BlaiseApiClient(`http://${blaiseApiUrl}`);

describe("blaiseApiClient users", () => {
  describe("get user", () => {
    const username = "test-user";

    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/users/${username}`).reply(200, {
        name: username,
        role: "DST",
        serverParks: ["gusty"],
        defaultServerPark: "gusty"
      });
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns the user details", async () => {
      const result = await blaiseApiClient.getUser(username);

      expect(result.name).toEqual(username);
      expect(result.role).toEqual("DST");
    });
  });


  describe("get users", () => {
    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/users`).reply(200, [
        {
          name: "test-user",
          role: "DST",
          serverParks: ["gusty"],
          defaultServerPark: "gusty"
        }
      ]);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns the user details", async () => {
      const result = await blaiseApiClient.getUsers();

      expect(result).toEqual([
        {
          name: "test-user",
          role: "DST",
          serverParks: ["gusty"],
          defaultServerPark: "gusty"
        }
      ]);
    });
  });

  describe("validate password - valid", () => {
    const username = "test-user";
    const password = "test-password";

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/users/${username}/validate`).reply(200, true);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns true", async () => {
      expect(await blaiseApiClient.validatePassword(username, password)).toBeTruthy();
    });
  });

  describe("validate password - invalid", () => {
    const username = "test-user";
    const password = "test-password";

    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/users/${username}/validate`).reply(200, false);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns false", async () => {
      expect(await blaiseApiClient.validatePassword(username, password)).toBeFalsy();
    });
  });

  describe("create user", () => {
    beforeEach(() => {
      mock.onPost(`http://${blaiseApiUrl}/api/v2/users`).reply(201,
        CreateUserResponseMockObject,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("creates a user and returns a response", async () => {
      const createUser = await blaiseApiClient.createUser(CreateUserMockObject);

      expect(createUser.name).toEqual("Beyonce");
      expect(createUser.role).toEqual("DST");
      expect(createUser.serverParks).toHaveLength(1);
      expect(createUser.defaultServerPark).toEqual("gusty");
    });
  });

  describe("delete user", () => {
    const userName = "Beyonce";

    beforeEach(() => {
      mock.onDelete(`http://${blaiseApiUrl}/api/v2/users/${userName}`).reply(204,
        null,
      );
    });

    afterEach(() => {
      mock.reset();
    });

    it("deletes a user", async () => {
      const result = await blaiseApiClient.deleteUser(userName);

      expect(result).toBeNull();
    });
  });

  describe("get user roles", () => {
    beforeEach(() => {
      mock.onGet(`http://${blaiseApiUrl}/api/v2/userroles`).reply(200, [
        {
          name: "test-role",
          description: "test",
          permissions: ["test"]
        }
      ]);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns the user details", async () => {
      const result = await blaiseApiClient.getUserRoles();

      expect(result).toEqual([
        {
          name: "test-role",
          description: "test",
          permissions: ["test"]
        }
      ]);
    });
  });

  describe("change password ", () => {
    const username = "test-user";
    const password = "test-password";

    beforeEach(() => {
      mock.onPatch(`http://${blaiseApiUrl}/api/v2/users/${username}/password`).reply(204, null);
    });

    afterEach(() => {
      mock.reset();
    });

    it("returns null", async () => {
      expect(await blaiseApiClient.changePassword(username, password)).toBeNull();
    });
  });
});

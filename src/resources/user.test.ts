import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, describe, expect, it } from "vitest";

import { BlaiseApiClient } from "../blaiseApiClient.js";
import { mockNewUser, mockNewUserResponse } from "../mocks/user.mock.js";

const mock = new MockAdapter(axios, { onNoMatch: "throwException" });
const blaiseApiClient = new BlaiseApiClient("http://testUri");

describe("blaiseApiClient user functions", () => {
  afterEach(() => {
    mock.reset();
  });

  describe("get user", () => {
    const username = "test-user";

    it("returns the user details", async () => {
      mock.onGet(`api/v2/users/${username}`).reply(200, {
        name: username,
        role: "DST",
        serverParks: ["gusty"],
        defaultServerPark: "gusty",
      });

      const result = await blaiseApiClient.getUser(username);

      expect(result.name).toEqual(username);
      expect(result.role).toEqual("DST");
    });
  });

  describe("get users", () => {
    it("returns the user details", async () => {
      mock
        .onGet("api/v2/users")
        .reply(200, [
          { name: "test-user", role: "DST", serverParks: ["gusty"], defaultServerPark: "gusty" },
        ]);

      const result = await blaiseApiClient.getUsers();

      expect(result).toEqual([
        { name: "test-user", role: "DST", serverParks: ["gusty"], defaultServerPark: "gusty" },
      ]);
    });
  });

  describe("validate password", () => {
    const username = "test-user";
    const password = "test-password";

    it("returns true for valid password", async () => {
      mock.onPost(`api/v2/users/${username}/validate`).reply(200, true);
      expect(await blaiseApiClient.validatePassword(username, password)).toBe(true);
    });

    it("returns false for invalid password", async () => {
      mock.onPost(`api/v2/users/${username}/validate`).reply(200, false);
      expect(await blaiseApiClient.validatePassword(username, password)).toBe(false);
    });
  });

  describe("create user", () => {
    it("creates a user and returns a response", async () => {
      mock.onPost("api/v2/users").reply(201, mockNewUserResponse);
      const createUser = await blaiseApiClient.createUser(mockNewUser);

      expect(createUser.name).toEqual("Beyonce");
      expect(createUser.role).toEqual("DST");
      expect(createUser.serverParks).toHaveLength(1);
    });
  });

  describe("delete user", () => {
    const userName = "Beyonce";

    it("deletes a user", async () => {
      mock.onDelete(`api/v2/users/${userName}`).reply(204, null);
      const result = await blaiseApiClient.deleteUser(userName);

      expect(result).toBeNull();
    });
  });

  describe("get user roles", () => {
    it("returns the user details", async () => {
      mock
        .onGet("api/v2/userroles")
        .reply(200, [{ name: "test-role", description: "test", permissions: ["test"] }]);
      const result = await blaiseApiClient.getUserRoles();

      expect(result).toEqual([{ name: "test-role", description: "test", permissions: ["test"] }]);
    });
  });

  describe("change password", () => {
    const username = "test-user";
    const password = "test-password";

    it("returns null", async () => {
      mock.onPatch(`api/v2/users/${username}/password`).reply(204, null);
      expect(await blaiseApiClient.changePassword(username, password)).toBeNull();
    });
  });

  describe("change user role", () => {
    const username = "test-user";
    const role = "test-role";

    it("returns null", async () => {
      mock.onPatch(`api/v2/users/${username}/role`).reply(204, null);
      expect(await blaiseApiClient.changeUserRole(username, role)).toBeNull();
    });
  });

  describe("change user server parks", () => {
    const username = "test-user";
    const serverParks = ["gusty", "local"];
    const defaultServerPark = "gusty";

    it("returns null", async () => {
      mock.onPatch(`api/v2/users/${username}/serverparks`).reply(204, null);

      const result = await blaiseApiClient.changeUserServerParks(
        username,
        serverParks,
        defaultServerPark,
      );

      expect(result).toBeNull();
    });
  });
});

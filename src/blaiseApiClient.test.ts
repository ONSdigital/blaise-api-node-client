import { describe, it, expect, vi, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import BlaiseApiClient from "./blaiseApiClient.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  public async testGet(url: string) {
    return this.get(url);
  }
}

describe("BlaiseApiClient internal configuration", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("injects auth headers when provider is configured", async () => {
    const client = new TestBlaiseApiClient("http://testUri", {
      blaiseApiClientId: "test-id",
    });

    const getAuthHeaderSpy = vi
      .spyOn(client.blaiseIapProvider!, "getAuthHeader")
      .mockResolvedValue({ Authorization: "Bearer token" });

    const mock = new MockAdapter(client.httpClient, { onNoMatch: "throwException" });

    mock.onGet("/test").reply(200);

    await client.testGet("/test");

    expect(getAuthHeaderSpy).toHaveBeenCalled();
  });

  it("does not inject auth headers when provider is missing", async () => {
    const client = new TestBlaiseApiClient("http://testUri");

    const mock = new MockAdapter(client.httpClient, { onNoMatch: "throwException" });

    mock.onGet("/test").reply(200);

    await client.testGet("/test");

    expect(client.blaiseIapProvider).toBeUndefined();
  });

  it("configures the http client with a timeout when provided", () => {
    const timeoutInMs = 5000;
    const client = new BlaiseApiClient("http://testUri", { timeoutInMs });

    expect(client.httpClient.defaults.timeout).toBe(timeoutInMs);
  });

  it("does not set a timeout if not provided in config", () => {
    const client = new BlaiseApiClient("http://testUri");

    expect(client.httpClient.defaults.timeout).toBe(0);
  });
});

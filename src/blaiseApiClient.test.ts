import MockAdapter from "axios-mock-adapter";
import { afterEach, describe, expect, it, vi } from "vitest";

import { BlaiseApiClient } from "./blaiseApiClient.js";

class TestBlaiseApiClient extends BlaiseApiClient {
  public async testGet(url: string) {
    return this.get(url);
  }

  public createMockAdapter() {
    return new MockAdapter(this.httpClient, { onNoMatch: "throwException" });
  }

  public getIapProvider() {
    return this.iapProvider;
  }

  public getTimeoutInMs() {
    return this.httpClient.defaults.timeout;
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
      .spyOn(client.getIapProvider()!, "getAuthHeader")
      .mockResolvedValue({ Authorization: "Bearer token" });

    const mock = client.createMockAdapter();

    mock.onGet("/test").reply(200);

    await client.testGet("/test");

    expect(getAuthHeaderSpy).toHaveBeenCalled();
  });

  it("does not inject auth headers when provider is missing", async () => {
    const client = new TestBlaiseApiClient("http://testUri");

    const mock = client.createMockAdapter();

    mock.onGet("/test").reply(200);

    await client.testGet("/test");

    expect(client.getIapProvider()).toBeUndefined();
  });

  it("configures the http client with a timeout when provided", () => {
    const timeoutInMs = 5000;
    const client = new TestBlaiseApiClient("http://testUri", { timeoutInMs });

    expect(client.getTimeoutInMs()).toBe(timeoutInMs);
  });

  it("uses a safe default timeout if not provided in config", () => {
    const client = new TestBlaiseApiClient("http://testUri");

    expect(client.getTimeoutInMs()).toBe(30_000);
  });

  it("allows explicitly disabling the timeout", () => {
    const client = new TestBlaiseApiClient("http://testUri", { timeoutInMs: 0 });

    expect(client.getTimeoutInMs()).toBe(0);
  });

  it("rejects an empty API URL", () => {
    expect(() => new BlaiseApiClient("   ")).toThrow(
      "blaiseApiUrl must be a non-empty absolute http(s) URL",
    );
  });

  it("rejects unsupported API URL protocols", () => {
    expect(() => new BlaiseApiClient("ftp://testUri")).toThrow(
      "blaiseApiUrl must use the http or https protocol",
    );
  });

  it("rejects invalid timeout values", () => {
    expect(() => new BlaiseApiClient("http://testUri", { timeoutInMs: -1 })).toThrow(
      "timeoutInMs must be a non-negative finite number",
    );
  });
});

import { Diagnostic } from "../types/diagnostic.js";

export const mockDiagnostics: readonly Diagnostic[] = [
  { healthCheckType: "Connection model", status: "OK" },
  { healthCheckType: "Blaise connection", status: "OK" },
  { healthCheckType: "Remote data server connection", status: "OK" },
  { healthCheckType: "Remote Cati management connection", status: "OK" },
];

import type { Diagnostic } from "../types/diagnostic.types.js";

export const mockDiagnostics = [
  { healthCheckType: "Connection model", status: "OK" },
  { healthCheckType: "Blaise connection", status: "OK" },
  { healthCheckType: "Remote data server connection", status: "OK" },
  { healthCheckType: "Remote Cati management connection", status: "OK" },
] as const satisfies readonly Diagnostic[];

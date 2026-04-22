import { Diagnostic } from "../interfaces/diagnostic.js";

export const DiagnosticMockObject: readonly Diagnostic[] = [
  { healthCheckType: "Connection model", status: "OK" },
  { healthCheckType: "Blaise connection", status: "OK" },
  { healthCheckType: "Remote data server connection", status: "OK" },
  { healthCheckType: "Remote Cati management connection", status: "OK" },
];

export default DiagnosticMockObject;

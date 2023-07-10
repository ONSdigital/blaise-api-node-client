import { IDiagnostic } from "../interfaces/diagnostics.interface";

export const DiagnosticMockObject:IDiagnostic[] = [
    {"health check type": "Connection model", status: "OK"},
    {"health check type": "Blaise connection", status: "OK"},
    {"health check type": "Remote data server connection", status: "OK"},
    {"health check type": "Remote Cati management connection", status: "OK"}
];
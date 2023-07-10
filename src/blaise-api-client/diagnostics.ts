import BlaiseApiClient from "../blaise-api-client";
import { IDiagnostic } from "../interfaces/diagnostics.interface";

export async function getDiagnostics(this: BlaiseApiClient): Promise<IDiagnostic[]> {
  return this.get("/api/v2/health/diagnosis");
}

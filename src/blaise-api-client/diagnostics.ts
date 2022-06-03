import BlaiseApiClient from "../blaise-api-client";
import { Diagnostic } from "../interfaces/diagnostics";

export async function getDiagnostics(this: BlaiseApiClient): Promise<Diagnostic[]> {
  return this.get("/api/v2/health/diagnosis");
}

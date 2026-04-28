import BlaiseApiClient from "../blaiseApiClient.js";
import { Diagnostic } from "../types/diagnostic.js";

export async function getDiagnostics(this: BlaiseApiClient): Promise<Diagnostic[]> {
  return this.get<Diagnostic[]>("api/v2/health/diagnosis");
}

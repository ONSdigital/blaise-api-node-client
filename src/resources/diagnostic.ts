import type { BlaiseApiClient } from "../blaiseApiClient.js";
import type { Diagnostic } from "../types/diagnostic.types.js";

export async function getDiagnostics(this: BlaiseApiClient): Promise<readonly Diagnostic[]> {
  return this.get<readonly Diagnostic[]>("api/v2/health/diagnosis");
}

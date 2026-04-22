import BlaiseApiClient from "../blaiseApiClient.js";
import { Diagnostic } from "../interfaces/diagnostic.js";

export async function getDiagnostics(this: BlaiseApiClient): Promise<Diagnostic[]> {
  return this.get<Diagnostic[]>("api/v2/health/diagnosis");
}

export default getDiagnostics;

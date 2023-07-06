import BlaiseApiClient from "../blaise-api-client";
import { Diagnostic } from "../interfaces/diagnostics";
export declare function getDiagnostics(this: BlaiseApiClient): Promise<Diagnostic[]>;

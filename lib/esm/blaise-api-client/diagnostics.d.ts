import BlaiseApiClient from "../blaise-api-client";
import { IDiagnostic } from "../interfaces/diagnostics.interface";
export declare function getDiagnostics(this: BlaiseApiClient): Promise<IDiagnostic[]>;

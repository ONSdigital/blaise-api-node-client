import BlaiseApiClient from '../blaiseApiClient';
import { Diagnostic } from '../interfaces/diagnostic';
export declare function getDiagnostics(this: BlaiseApiClient): Promise<Diagnostic[]>;

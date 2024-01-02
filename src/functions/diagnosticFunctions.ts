import BlaiseApiClient from '../blaiseApiClient';
import { Diagnostic } from '../interfaces/diagnostic';

export async function getDiagnostics(this: BlaiseApiClient): Promise<Diagnostic[]> {
  return this.get('/api/v2/health/diagnosis');
}

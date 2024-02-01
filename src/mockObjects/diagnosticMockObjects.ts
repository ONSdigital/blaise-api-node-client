import { Diagnostic } from '../interfaces/diagnostic';

export const DiagnosticMockObject:Diagnostic[] = [
  { 'health check type': 'Connection model', status: 'OK' },
  { 'health check type': 'Blaise connection', status: 'OK' },
  { 'health check type': 'Remote data server connection', status: 'OK' },
  { 'health check type': 'Remote Cati management connection', status: 'OK' },
];

export default DiagnosticMockObject;

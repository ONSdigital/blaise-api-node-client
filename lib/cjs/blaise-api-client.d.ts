import { AxiosInstance } from "axios";
import { Instrument, InstallInstrument, InstallInstrumentResponse } from "./interfaces/instrument";
import { Diagnostic } from "./interfaces/diagnostic";
import { DiagnosticMockOject } from "./mock-objects/diagnostic-mock-objects";
declare class BlaiseApiClient {
    blaise_api_url: string;
    httpClient: AxiosInstance;
    constructor(blaise_api_url: string);
    getAllInstrumentsWithCatiData(): Promise<Instrument[]>;
    getInstrumentsWithCatiData(serverpark: string): Promise<Instrument[]>;
    getInstrumentWithCatiData(serverpark: string, instrumentName: string): Promise<Instrument>;
    getInstruments(serverpark: string): Promise<Instrument[]>;
    instrumentExists(serverpark: string, instrumentName: string): Promise<boolean>;
    getInstrument(serverpark: string, instrumentName: string): Promise<Instrument>;
    installInstrument(serverpark: string, instrument: InstallInstrument): Promise<InstallInstrumentResponse>;
    deleteInstrument(serverpark: string, instrumentName: string): Promise<null>;
    getDiagnostics(): Promise<Diagnostic[]>;
    private url;
    private get;
    private post;
    private delete;
}
export default BlaiseApiClient;
export type { Instrument, InstallInstrument, InstallInstrumentResponse, Diagnostic };
export { DiagnosticMockOject };

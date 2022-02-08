import { Instrument } from "./instruments";

interface Survey {
    instruments: Instrument[]
    survey: string
}

export type { Instrument, Survey };

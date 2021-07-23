import { Instrument } from "./instrument";

interface Survey {
    instruments: Instrument[]
    survey: string
}

export type { Instrument, Survey };
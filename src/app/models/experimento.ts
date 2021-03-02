import { Variables } from "./variables";
import { Context } from "./context";
import { Analyses } from "./analyses";
import { Desing } from "./design";
import { Hypotheses } from "./hypotheses";

export interface Experimento {
context:Context,
design: Desing[],
analyses:Analyses[],
hypotheses:Hypotheses[],
variables:Variables[]
}
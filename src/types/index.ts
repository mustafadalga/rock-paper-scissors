import { GameChoice, GameOutcome } from "@/enums";

export interface GameResult {
    gameOutcome: GameOutcome | null;
    isSingleBet: boolean;
    tieBet?: GameChoice | null;
    winnerBet?: GameChoice | null,
}
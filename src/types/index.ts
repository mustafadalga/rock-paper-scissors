import { GameChoice, GameOutcome } from "@/enums";

export interface GameResult {
    gameOutcome: GameOutcome | null;
    isSinglePosition: boolean;
    tieBet?: GameChoice | null;
    winnerBet?: GameChoice | null,
}
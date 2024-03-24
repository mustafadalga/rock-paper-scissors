import { WIN_CONDITIONS } from "@/constants";
import { GameChoice, GameOutcome } from "@/enums";
import { GameResult } from "@/types";


export default function determineOutcome(playerChoices: GameChoice[], computerChoice: GameChoice): GameResult {
    const isSingleBet = playerChoices.length === 1;

    if (playerChoices.includes(computerChoice)) {
        return {
            gameOutcome: isSingleBet ? GameOutcome.TIE : GameOutcome.LOSS,
            isSingleBet,
            tieBet: computerChoice || null,
        }
    }

    const winnerBet: GameChoice | undefined = playerChoices.find(playerChoice => WIN_CONDITIONS[playerChoice].includes(computerChoice));

    if (winnerBet) {
        return {
            gameOutcome: GameOutcome.WIN,
            isSingleBet,
            winnerBet
        }
    }

    return {
        gameOutcome: GameOutcome.LOSS,
        isSingleBet,
        winnerBet: null
    }
}
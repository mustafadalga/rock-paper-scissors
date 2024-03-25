import { WIN_CONDITIONS } from "@/constants";
import { GameChoice, GameOutcome } from "@/enums";
import { GameResult } from "@/types";


export default function determineOutcome(playerChoices: GameChoice[], computerChoice: GameChoice): GameResult {
    const positions = new Set<GameChoice>(playerChoices);
    const isSinglePosition = positions.size == 1;

    if (playerChoices.includes(computerChoice)) {
        return {
            gameOutcome: isSinglePosition ? GameOutcome.TIE : GameOutcome.LOSS,
            isSinglePosition,
            tieBet: computerChoice || null,
        }
    }

    const winnerBet: GameChoice | undefined = playerChoices.find(playerChoice => WIN_CONDITIONS[playerChoice].includes(computerChoice));

    if (winnerBet) {
        return {
            gameOutcome: GameOutcome.WIN,
            isSinglePosition,
            winnerBet
        }
    }

    return {
        gameOutcome: GameOutcome.LOSS,
        isSinglePosition,
        winnerBet: null
    }
}
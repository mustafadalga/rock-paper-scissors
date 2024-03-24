import { WIN_CONDITIONS } from "@/constants";
import { GameChoice, GameOutcome } from "@/enums";

export default function determineOutcome(playerChoices: GameChoice[], computerChoice: GameChoice): GameOutcome {
    if (playerChoices.includes(computerChoice)) {
        const isSingleBet: boolean = playerChoices.length == 1;

        return isSingleBet ? GameOutcome.TIE : GameOutcome.LOSS;
    } else if (playerChoices.some(playerChoice => WIN_CONDITIONS[playerChoice].includes(computerChoice))) {
        return GameOutcome.WIN
    }

    return GameOutcome.LOSS;
}
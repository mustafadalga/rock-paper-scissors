import { WIN_CONDITIONS } from "@/constants";
import { GameChoice, GameOutcome } from "@/enums";

export default function determineOutcome(playerChoices: GameChoice[], computerChoice: GameChoice): GameOutcome {
    if (playerChoices.includes(computerChoice)) {
        return GameOutcome.TIE;
    } else if (playerChoices.some(playerChoice => WIN_CONDITIONS[playerChoice].includes(computerChoice))) {
        return GameOutcome.WIN
    } else {
        return GameOutcome.LOSS
    }
}
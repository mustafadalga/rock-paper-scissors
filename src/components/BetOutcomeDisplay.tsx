import { useGameStore } from "@/store";
import useAnimatedNumber from "@/hooks/useAnimatedNumber.ts";
import { CHOICE_COLORS, WIN_CONDITIONS } from "@/constants";
import { GameChoice, GameOutcome } from "@/enums";

function determineTitle(playerChoices: GameChoice[], computerChoice: GameChoice, gameOutcome: GameOutcome): {
    className: string,
    title: string
} {
    switch (gameOutcome) {
        case GameOutcome.TIE: {
            const tieBet: GameChoice = playerChoices.find(playerChoice => playerChoice == computerChoice)!;
            return {
                className: "text-gains-boro",
                title: `Tie with ${tieBet}`
            }
        }
        case GameOutcome.WIN: {
            const winnerBet: GameChoice = playerChoices.find(playerChoice => WIN_CONDITIONS[playerChoice].includes(computerChoice))!;
            return {
                title: `${winnerBet} won`,
                className: CHOICE_COLORS[winnerBet].textColor
            }
        }
        case GameOutcome.LOSS: {
            const isSingleBet: boolean = playerChoices.length == 1;
            return {
                title: isSingleBet ? `${computerChoice} won` : "Loss",
                className: isSingleBet ? CHOICE_COLORS[computerChoice].textColor : "text-gains-boro"
            }
        }
        default:
            return {
                title: "",
                className: ""
            }
    }
}

export function BetOutcomeDisplay() {
    const { bets, computerBet, winAmount, gameOutcome } = useGameStore();
    const betChoices: GameChoice[] = bets.map(bet => bet.choice);
    const {
        title,
        className
    } = determineTitle(betChoices, computerBet as GameChoice, gameOutcome as GameOutcome)

    return (
        <div className="grid place-items-center gap-5 uppercase font-semibold">
            <h1 className={`${className} text-5xl`}> {title}</h1>
            <h3 className="text-xl">
                <span className="text-burly-wood">You win</span>
                <span className="text-gains-boro"> {useAnimatedNumber(winAmount)} </span>
            </h3>
        </div>
    )
}
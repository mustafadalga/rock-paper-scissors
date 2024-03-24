import { useGameStore } from "@/store";
import useAnimatedNumber from "@/hooks/useAnimatedNumber";
import { CHOICE_COLORS } from "@/constants";
import { GameChoice, GameOutcome } from "@/enums";
import { GameResult } from "@/types";

function determineTitle(computerChoice: GameChoice, {
    gameOutcome,
    tieBet,
    isSingleBet,
    winnerBet
}: GameResult): {
    className: string,
    title: string
} {
    switch (gameOutcome) {
        case GameOutcome.TIE: {
            return {
                className: "text-gains-boro",
                title: `Tie with ${tieBet}`
            }
        }
        case GameOutcome.WIN: {
            return {
                title: `${winnerBet} won`,
                className: CHOICE_COLORS[winnerBet as keyof typeof CHOICE_COLORS].textColor
            }
        }
        case GameOutcome.LOSS: {
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
    const {  computerBet, winAmount, gameResult } = useGameStore();
    const {
        title,
        className
    } = determineTitle(computerBet as GameChoice, gameResult)

    return (
        <div className="grid place-items-center gap-5 uppercase font-semibold">
            <h1 className={`${className} text-3xl md:text-4xl lg:text-5xl`}> {title}</h1>
            <h3 className="text-xl">
                <span className="text-burly-wood">You win</span>
                <span className="text-gains-boro"> {useAnimatedNumber(winAmount)} </span>
            </h3>
        </div>
    )
}
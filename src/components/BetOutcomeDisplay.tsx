import { useGameStore } from "@/store";
import { CHOICE_COLORS } from "@/constants";
import { GameChoice } from "@/enums";


export function BetOutcomeDisplay() {
    const { computerBet, winAmount } = useGameStore();
    const titleTextColorClassName: string = CHOICE_COLORS[computerBet as GameChoice].textColor;

    return (
        <div className="grid place-items-center gap-5 uppercase font-semibold">
            <h1 className={`${titleTextColorClassName} text-5xl`}> {computerBet} won </h1>
            <h3 className="text-xl">
                <span className="text-burly-wood">You win</span>
                <span className="text-gains-boro"> {winAmount} </span>
            </h3>
        </div>
    )
}
import { Bet as IBet } from "@/store";
import { GameChoice } from "@/enums";
import { BET_AMOUNT } from "@/constants";
import BetAmount from "./BetAmount";

interface Props {
    choice: GameChoice,
    amount: number,
    showBetAmount: boolean,
    textColor: string,
    backgroundColor: string,
    borderColor: string,
    borderWidth: string,
    onClick: (bet: IBet) => void
}

export default function Bet({
                                choice,
                                amount,
                                showBetAmount,
                                textColor,
                                backgroundColor,
                                borderColor,
                                borderWidth,
                                onClick
                            }: Props) {
    const containerClassName = `${backgroundColor} ${borderColor} ${borderWidth} grid place-items-center content-end gap-3 w-[10.25rem] h-32 p-5 border-solid transition-all duration-300 rounded-md hover:scale-105`;
    const textClassName = `${textColor} uppercase text-xl font-semibold`;

    return (
        <button type="button"
                onClick={() => onClick({ choice, amount: BET_AMOUNT })}
                className={containerClassName}>

            {showBetAmount && <BetAmount amount={amount}/>}
            <div className={textClassName}> {choice} </div>

        </button>
    )
}
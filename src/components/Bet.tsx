import { AnimatePresence, motion } from "framer-motion";
import { Bet as IBet } from "@/store";
import { GameChoice } from "@/enums";
import { BET_AMOUNT, fadeInUpAnimation } from "@/constants";
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
    const containerClassName = `${backgroundColor} ${borderColor} ${borderWidth} grid place-items-center content-end gap-2 lg:gap-3 w-20 min-h-24 md:w-[10.25rem] md:h-32 p-1 md:p-2 lg:p-2.5 border-solid transition-all duration-300 rounded-md hover:scale-105`;
    const textClassName = `${textColor} uppercase text-xs md:text-base lg:text-xl font-semibold`;

    return (
        <button type="button"
                onClick={() => onClick({ choice, amount: BET_AMOUNT })}
                className={containerClassName}>

            <AnimatePresence>
                {showBetAmount && <motion.div {...fadeInUpAnimation}>
                    <BetAmount amount={amount}/>
                </motion.div>}
            </AnimatePresence>

            <div className={textClassName}> {choice} </div>

        </button>
    )
}
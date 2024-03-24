import { useCallback } from "react";
import { toast } from "react-toastify";
import { useGameStore, Bet as IBet } from "@/store";
import { CHOICE_COLORS, MAX_CHOICE_BET } from "@/constants";
import { GameChoice } from "@/enums";
import Bet from "./Bet.tsx";
import BetsLabel from "./BetsLabel.tsx";

export default function Bets() {
    const { balance, bets, computerBet, choiceBet, isGameFinished, updateBalance } = useGameStore();
    const selectedBetIds: GameChoice[] = bets.map(bet => bet.choice);
    const choices = Object.values(GameChoice).map(choice => ({
        choice,
        ...CHOICE_COLORS[choice],
        amount: bets.filter(bet => bet.choice === choice).reduce((total: number, bet: IBet) => total + bet.amount, 0),
        showBetAmount: selectedBetIds.includes(choice),
        borderWidth: choice == computerBet ? "border-4" : "border-2",
    }));

    const selectedBetCount: number = bets.length;
    const showLabel: boolean = selectedBetCount == 0;

    const onChoice = useCallback((chosenBet: IBet): void => {
        if (isGameFinished) return;
        if (selectedBetCount >= MAX_CHOICE_BET) {
            toast.info("Just a heads up! You can bet on up to 2 positions per game. Please adjust your bets accordingly.");
            return;
        }

        const totalBetAmount: number = bets.reduce((total: number, bet: IBet) => total + bet.amount, 0) + chosenBet.amount;
        const hasBalance: boolean = balance >= totalBetAmount;

        if (!hasBalance) {
            toast.warn("Oops! It looks like your balance isn't enough to place a bet. Please add funds to continue playing.");
            return;
        }

        choiceBet(chosenBet);
        updateBalance("decrease", chosenBet.amount);


    }, [ isGameFinished, selectedBetCount, balance, bets, choiceBet, updateBalance ]);

    return (
        <div className="grid place-items-center content-end gap-4">
            {showLabel ? <BetsLabel/> : <div className="h-6"/>}

            <div className="flex justify-center gap-4">
                {choices.map(choice => <Bet key={choice.choice}
                                            {...choice}
                                            onClick={onChoice}/>)}
            </div>
        </div>
    )
}
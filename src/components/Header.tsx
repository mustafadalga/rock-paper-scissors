import { useMemo } from "react";
import { Bet, useGameStore } from "@/store";
import useAnimatedNumber from "@/hooks/useAnimatedNumber";
import { MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER } from "@/constants";
import formatNumber from "@/utils/formatNumber";

interface FormattedData {
    balance: string
    totalBetAmount: string
    winAmount: string
}

export default function Header() {
    const { winAmount, balance, bets } = useGameStore();
    const totalBetAmount: number = bets.reduce((total: number, bet: Bet) => total + bet.amount, 0);
    const animatedBalance: string = useAnimatedNumber(balance);
    const animatedTotalBetAmount: string = useAnimatedNumber(totalBetAmount);
    const animatedWinAmount: string = useAnimatedNumber(winAmount);

    const formattedData = useMemo<FormattedData>(() => ({
        balance: balance < MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER ? animatedBalance : formatNumber(balance),
        totalBetAmount: totalBetAmount < MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER ? animatedTotalBetAmount : formatNumber(totalBetAmount),
        winAmount: winAmount < MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER ? animatedWinAmount : formatNumber(winAmount)
    }), [ balance, totalBetAmount, winAmount, animatedBalance, animatedTotalBetAmount, animatedWinAmount ]);

    return (
        <header className="flex justify-center h-7 bg-cod-gray">
            <div className="flex items-center gap-10 text-sm lg:text-base">
                <h4>
                    <span className="text-burly-wood uppercase">BALANCE :</span>
                    <span className="text-gains-boro"> {formattedData.balance} </span>
                </h4>
                <h4>
                    <span className="text-burly-wood uppercase">BET :</span>
                    <span className="text-gains-boro"> {formattedData.totalBetAmount} </span>
                </h4>
                <h4>
                    <span className="text-burly-wood uppercase">WIN :</span>
                    <span className="text-gains-boro"> {formattedData.winAmount} </span>
                </h4>
            </div>
        </header>
    )
}
import { Bet } from "@/store";
import { GameOutcome } from "@/enums";

export default function calculateReturn(bets: Bet[], gameOutcome: GameOutcome): number {
    const winAmount: number = 0;
    const totalBetAmount: number = bets.reduce((total: number, bet: Bet) => total + bet.amount, 0);
    const singleBetRate: number = 14;
    const twoBetRate: number = 3;
    const isSingleBet: boolean = bets.length == 1;
    const multiplier: number = isSingleBet ? singleBetRate : twoBetRate;

    if (gameOutcome == GameOutcome.WIN) {
        return totalBetAmount * multiplier;
    } else if (gameOutcome == GameOutcome.TIE && isSingleBet) {
        return totalBetAmount;
    }

    return winAmount;
}
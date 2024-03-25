import { Bet } from "@/store";
import { GameOutcome } from "@/enums";

export default function calculateReturn(bets: Bet[], gameOutcome: GameOutcome, isSinglePosition: boolean): number {
    const winAmount: number = 0;
    const totalBetAmount: number = bets.reduce((total: number, bet: Bet) => total + bet.amount, 0);
    const singleBetRate: number = 14;
    const twoBetRate: number = 3;
    const multiplier: number = isSinglePosition ? singleBetRate : twoBetRate;

    if (gameOutcome == GameOutcome.WIN) {
        return totalBetAmount * multiplier;
    } else if (gameOutcome == GameOutcome.TIE && isSinglePosition) {
        return totalBetAmount;
    }

    return winAmount;
}
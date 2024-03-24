import { Bet, useGameStore } from "@/store";

export default function Header() {
    const { winAmount, balance, bets } = useGameStore();
    const totalBetAmount: number = bets.reduce((total: number, bet: Bet) => total + bet.amount, 0);
    return (
        <div className="flex justify-center h-7 bg-cod-gray">
            <div className="flex items-center gap-10 text-base">
                <h4>
                    <span className="text-burly-wood uppercase">BALANCE :</span>
                    <span className="text-gains-boro"> {balance} </span>
                </h4>
                <h4>
                    <span className="text-burly-wood uppercase">BET :</span>
                    <span className="text-gains-boro"> {totalBetAmount} </span>
                </h4>
                <h4>
                    <span className="text-burly-wood uppercase">WIN :</span>
                    <span className="text-gains-boro"> {winAmount} </span>
                </h4>
            </div>
        </div>
    )
}
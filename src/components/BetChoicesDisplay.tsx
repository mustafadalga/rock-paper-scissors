import { useGameStore } from "@/store";
import { useEffect } from "react";
import determineOutcome from "@/utils/determineOutcome.ts";
import { GameChoice, GameOutcome } from "@/enums";
import calculateReturn from "@/utils/calculateReturn.ts";
import { GameResult } from "@/types";

export default function BetChoicesDisplay() {
    const { computerBet, bets, setGameResult, setWinAmount } = useGameStore();
    const playerChoice: string = bets.map(bet => bet.choice).join(" + ");

    useEffect(() => {
        const handleCalculateReturn = (gameOutcome: GameOutcome) => {
            const winAmount: number = calculateReturn(bets, gameOutcome);
            setWinAmount(winAmount);
        }

        const handleOutcome = () => {
            const gameResult: GameResult = determineOutcome(bets.map(bet => bet.choice), computerBet as GameChoice);
            setGameResult(gameResult);
            handleCalculateReturn(gameResult.gameOutcome as GameOutcome)
        }
        handleOutcome()
    }, []);

    return (
        <div className="flex gap-16 text-4xl font-semibold">
            <h2 className="text-gains-boro uppercase"> {computerBet} </h2>
            <h2 className="text-burly-wood lowercase"> vs </h2>
            <h2 className="text-gains-boro uppercase"> {playerChoice} </h2>
        </div>
    )

}
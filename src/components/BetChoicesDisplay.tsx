import { useGameStore } from "@/store";
import { useEffect } from "react";
import determineOutcome from "@/utils/determineOutcome";
import { GameChoice, GameOutcome } from "@/enums";
import calculateReturn from "@/utils/calculateReturn";
import { GameResult } from "@/types";

export default function BetChoicesDisplay() {
    const { computerBet, bets, setGameResult, setWinAmount } = useGameStore();
    const positions = new Set<GameChoice>(bets.map(bet => bet.choice));
    const playerChoice: string = [ ...positions ].join(" + ");

    useEffect(() => {
        const handleCalculateReturn = (gameOutcome: GameOutcome, isSinglePosition: boolean) => {
            const winAmount: number = calculateReturn(bets, gameOutcome, isSinglePosition);
            setWinAmount(winAmount);
        }

        const handleOutcome = () => {
            const gameResult: GameResult = determineOutcome(bets.map(bet => bet.choice), computerBet as GameChoice);
            setGameResult(gameResult);
            handleCalculateReturn(gameResult.gameOutcome as GameOutcome, gameResult.isSinglePosition)
        }
        handleOutcome()
    }, []);

    return (
        <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-16 text-2xl md:text-3xl lg:text-4xl font-semibold">
            <h2 className="text-gains-boro uppercase"> {computerBet} </h2>
            <h2 className="text-burly-wood lowercase"> vs </h2>
            <h2 className="text-gains-boro uppercase"> {playerChoice} </h2>
        </div>
    )

}
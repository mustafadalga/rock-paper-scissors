import { useCallback } from "react";
import { toast } from "react-toastify";
import { useGameStore, Bet as IBet } from "@/store";
import { CHOICE_COLORS, MAX_CHOICE_BET } from "@/constants";
import { GameChoice, GameOutcome, GameState } from "@/enums";
import { GameResult } from "@/types";
import Bet from "./Bet";
import BetsLabel from "./BetsLabel";

function getBorderWidth(selectedChoice: GameChoice, computerChoice: GameChoice, {
    gameOutcome,
    tieBet,
    isSinglePosition,
    winnerBet
}: GameResult): string {
    switch (gameOutcome) {
        case GameOutcome.TIE: {
            return "border-2";
        }
        case GameOutcome.WIN: {
            return selectedChoice == winnerBet ? "border-4" : "border-2";
        }
        case GameOutcome.LOSS: {
            if (selectedChoice == computerChoice && isSinglePosition) {
                return "border-4";
            }
            return tieBet ? "border-2" : selectedChoice == computerChoice ? "border-4" : "border-2";
        }
        default:
            return "border-2";
    }
}

export default function Bets() {
    const {
        balance,
        bets,
        computerBet,
        gameResult,
        gameState,
        choiceBet,
        isGameFinished,
        updateBalance
    } = useGameStore();
    const playerChoices: GameChoice[] = bets.map(bet => bet.choice);
    const choices = Object.values(GameChoice).map(choice => ({
        choice,
        ...CHOICE_COLORS[choice],
        amount: bets.filter(bet => bet.choice === choice).reduce((total: number, bet: IBet) => total + bet.amount, 0),
        showBetAmount: playerChoices.includes(choice),
        borderWidth: getBorderWidth(choice, computerBet as GameChoice, gameResult),
    }));

    const selectedBetCount: number = bets.length;
    const showLabel: boolean = selectedBetCount == 0;

    const onChoice = useCallback((chosenBet: IBet): void => {
        if (isGameFinished || gameState != GameState.Started) return;

        const positions = new Set<GameChoice>(playerChoices);

        if (positions.size >= MAX_CHOICE_BET && !positions.has(chosenBet.choice)) {
            toast.info("Just a heads up! You can bet on up to 2 positions per game. Please adjust your bets accordingly.");
            return;
        }

        const hasBalance: boolean = !!balance && balance >= chosenBet.amount;

        if (!hasBalance) {
            toast.warn("Oops! It looks like your balance isn't enough to place a bet. Please add funds to continue playing.");
            return;
        }

        choiceBet(chosenBet);
        updateBalance("decrease", chosenBet.amount);

    }, [ isGameFinished, gameState, balance, playerChoices, choiceBet, updateBalance ]);

    return (
        <section className="grid place-items-center content-end gap-4">
            {showLabel ? <BetsLabel/> : <div className="h-6"/>}

            <div className="flex justify-center gap-2 md:gap-3 lg:gap-4">
                {choices.map(choice => <Bet key={choice.choice}
                                            {...choice}
                                            onClick={onChoice}/>)}
            </div>
        </section>
    )
}
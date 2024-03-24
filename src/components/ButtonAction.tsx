import { toast } from "react-toastify";
import { useGameStore } from "@/store";
import { GameChoice, GameState } from "@/enums";

export default function ButtonAction() {
    const {
        isGameFinished,
        bets,
        choiceComputerBet,
        gameState,
        setGameState,
        finishGame,
        toggleBetOutComeVisibility
    } = useGameStore();
    const hasSelectedBet: boolean = bets.length > 0;
    const isGamePending: boolean = gameState === GameState.Pending;
    const buttonClassName: string = `${isGamePending ? "text-burly-wood/25 bg-cod-gray/25 border-burly-wood/25" : "text-burly-wood bg-cod-gray border-burly-wood"} w-[10.25rem] h-[4.5rem] border-2 border-solid rounded-[2rem] hover:shadow-[0px_0px_4px] hover:shadow-burly-wood transition-all duration-300`;
    const buttonText: string = isGameFinished && !isGamePending ? "Clear" : "Play";

    const handleComputerBet = () => {
        const choiceCount: number = Object.keys(GameChoice).length;
        const selectedRandomChoiceIndex: number = Math.floor(Math.random() * choiceCount);
        const computerChoice: GameChoice = Object.values(GameChoice)[selectedRandomChoiceIndex];
        choiceComputerBet(computerChoice);
    }


    const onClick = (): void => {
        if (gameState == GameState.Pending) return;

        if (!hasSelectedBet) {
            toast.info("Ready to play? Please place at least one bet to start the game. Good luck!");
            return
        }
        if (isGameFinished) {
            toggleBetOutComeVisibility();
            return;
        }

        setGameState(GameState.Pending);
        toggleBetOutComeVisibility();
        finishGame();
        handleComputerBet();
    }

    return (
        <button type="button"
                onClick={onClick}
                className={buttonClassName}>
            <span className="uppercase text-xl">{buttonText}</span>
        </button>
    )
}
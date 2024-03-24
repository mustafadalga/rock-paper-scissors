import { toast } from "react-toastify";
import { useGameStore } from "@/store";
import { GameChoice, GameState } from "@/enums";

export default function ButtonAction() {
    const { isGameFinished, finishGame, newGame, bets, choiceComputerBet, gameState, setGameState } = useGameStore();
    const hasSelectedBet: boolean = bets.length > 0;
    const isGamePending: boolean = gameState === GameState.Pending;
    const buttonClassName: string = `w-[10.25rem] h-[4.5rem] ${isGamePending ? "text-burly-wood/25 bg-cod-gray/25 border-burly-wood/25" : "text-burly-wood bg-cod-gray border-burly-wood"}  border-2 border-solid  rounded-[2rem]`
    const buttonText: string = isGameFinished && !isGamePending ? "Clear" : "Play";

    const handleComputerBet = () => {
        const choiceCount: number = Object.keys(GameChoice).length;
        const selectedRandomChoiceIndex: number = Math.floor(Math.random() * choiceCount);
        const computerChoice: GameChoice = Object.values(GameChoice)[selectedRandomChoiceIndex];
        choiceComputerBet(computerChoice);
    }

    const onClick = () => {
        if (!hasSelectedBet) {
            toast.info("Ready to play? Please place at least one bet to start the game. Good luck!");
            return
        }
        if (isGameFinished) {
            return newGame();
        }

        setGameState(GameState.Pending);
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
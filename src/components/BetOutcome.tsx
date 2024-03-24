import BetChoicesDisplay from "./BetChoicesDisplay.tsx";
import { BetOutcomeDisplay } from "./BetOutcomeDisplay.tsx";
import { useGameStore } from "@/store";
import { useEffect } from "react";
import { GameState } from "@/enums";

export default function BetOutcome() {
    const { showBetChoices, toggleBetChoicesVisibility, setGameState } = useGameStore();

    useEffect(() => {
        const showBetChoicesTimeout = setTimeout(toggleBetChoicesVisibility, 0);
        const hideBetChoicesTimeout = setTimeout(() => {
            toggleBetChoicesVisibility();
            setGameState(GameState.Finished);
        }, 1500);

        return () => {
            clearTimeout(showBetChoicesTimeout)
            clearTimeout(hideBetChoicesTimeout)
        };
    }, []);


    return (
        <div className="h-24 grid">
            { showBetChoices ? <BetChoicesDisplay/> : <BetOutcomeDisplay/> }
        </div>
    )
}
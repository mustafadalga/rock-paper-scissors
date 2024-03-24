import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { useGameStore } from "@/store";
import { GameState } from "@/enums";
import { fadeInUpAnimation } from "@/constants";
import BetChoicesDisplay from "./BetChoicesDisplay";
import { BetOutcomeDisplay } from "./BetOutcomeDisplay";


export default function BetOutcome() {
    const {
        showBetChoices,
        winAmount,
        toggleBetChoicesVisibility,
        setGameState,
        updateBalance,
    } = useGameStore();
    const winAmountRef = useRef<number>(winAmount);

    useEffect(() => {
        winAmountRef.current = winAmount;
    }, [winAmount]);

    useEffect(() => {
        const hideBetChoicesTimeout = setTimeout(() => {
            toggleBetChoicesVisibility();
            setGameState(GameState.Finished);
            updateBalance("increase", winAmountRef.current);
        }, 2000);

        return () => {
            clearTimeout(hideBetChoicesTimeout);
        };
    }, []);

    return (
        <div className="h-24 grid">
            <AnimatePresence mode="wait">
                {showBetChoices ? (
                    <motion.div
                        key="betChoices"
                        {...fadeInUpAnimation}>
                        <BetChoicesDisplay/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="betOutcome"
                        {...fadeInUpAnimation}>
                        <BetOutcomeDisplay/>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}
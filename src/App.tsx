import { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import { useGameStore } from "@/store";
import { fadeInUpAnimation } from "@/constants";
import Header from "@/components/Header.tsx";
import Bets from "@/components/Bets.tsx";
import ButtonAction from "@/components/ButtonAction.tsx";
import BetOutcome from "@/components/BetOutcome.tsx";


function App() {
    const { showBetOutCome, newGame } = useGameStore();
    const onExitComplete = useCallback(() => {
        if (!showBetOutCome) {
            newGame()
        }
    }, [ showBetOutCome, newGame ]);

    return (
        <main className="w-full h-full flex flex-col">
            <Header/>

            <section className="my-auto grid place-items-center gap-12">
                <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
                    {showBetOutCome ? (
                        <motion.div
                            key="betOutcome"
                            {...fadeInUpAnimation}>
                            <BetOutcome/>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="betEmptyOutcome"
                            {...fadeInUpAnimation}>
                            <div className="h-24"/>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Bets/>
                <ButtonAction/>
            </section>

            <ToastContainer/>
        </main>
    )
}

export default App

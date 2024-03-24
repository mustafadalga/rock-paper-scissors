import { ToastContainer } from 'react-toastify';
import { useGameStore } from "@/store";
import Header from "@/components/Header.tsx";
import Bets from "@/components/Bets.tsx";
import ButtonAction from "@/components/ButtonAction.tsx";
import BetOutcome from "@/components/BetOutcome.tsx";


function App() {
    const { isGameFinished } = useGameStore();
    return (
        <main className="w-full h-full flex flex-col">
            <Header/>

            <section className="my-auto grid place-items-center gap-12">
                    {isGameFinished ?  <BetOutcome/> : <div className="h-24"/>}

                    <Bets/>
                    <ButtonAction/>
            </section>

            <ToastContainer/>
        </main>
    )
}

export default App

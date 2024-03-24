import { create, StoreApi } from 'zustand';
import { devtools } from "zustand/middleware";
import { GameChoice, GameOutcome, GameState } from "@/enums";

export interface Bet {
    choice: GameChoice,
    amount: number
}

export interface State {
    balance: number,
    winAmount: number,
    bets: Bet[],
    computerBet: GameChoice | null,
    gameOutcome: GameOutcome | null,
    showBetChoices: boolean,
    gameState: GameState,
    isGameFinished: boolean,
}


export interface Actions {
    choiceBet: (bet: Bet) => void,
    choiceComputerBet: (computerBet: GameChoice) => void,
    updateBalance: (type: "increase" | "decrease", amount: number) => void,
    setGameOutcome: (gameOutcome: GameOutcome) => void,
    setWinAmount: (winAmount: number) => void,
    toggleBetChoicesVisibility: () => void,
    setGameState: (gameState: GameState) => void,
    finishGame: () => void,
    newGame: () => void
}

const initialState: State = {
    balance: 5000,
    winAmount: 0,
    bets: [],
    computerBet: null,
    gameOutcome: null,
    showBetChoices: false,
    gameState: GameState.Started,
    isGameFinished: false
}


const createState = (set: StoreApi<State & Actions>["setState"]): State & Actions => ({
    ...initialState,
    choiceBet: (bet) => {
        set((state) => ({
            bets: [ ...state.bets, bet ]
        }))
    },
    choiceComputerBet: (computerBet) => {
        set(() => ({
            computerBet
        }))
    },
    updateBalance: (type: "increase" | "decrease", amount: number) => {
        set((state) => ({
            balance: state.balance + (type === "increase" ? amount : -amount)
        }))
    },
    setGameOutcome: (gameOutcome) => {
        set(() => ({
            gameOutcome
        }))
    },
    setWinAmount: (winAmount) => {
        set(() => ({
            winAmount
        }))
    },
    toggleBetChoicesVisibility: () => {
        set((state) => ({
            showBetChoices: !state.showBetChoices
        }))
    },
    setGameState: (gameState) => {
        set(() => ({
            gameState
        }))
    },
    finishGame: () => {
        set(() => ({
            isGameFinished: true
        }))
    },
    newGame: () => {
        set((state) => ({
            balance: state.balance + state.winAmount,
            winAmount: 0,
            bets: [],
            computerBet: null,
            gameOutcome: null,
            showBetChoices: false,
            gameState: GameState.Started,
            isGameFinished: false
        }))
    }
});


export const useGameStore = create(devtools(createState));

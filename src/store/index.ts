import { create, StoreApi } from 'zustand';
import { devtools } from "zustand/middleware";
import { GameChoice, GameState } from "@/enums";
import { GameResult } from "@/types";

export interface Bet {
    choice: GameChoice,
    amount: number
}

export interface State {
    balance: number,
    winAmount: number,
    bets: Bet[],
    computerBet: GameChoice | null,
    gameResult: GameResult,
    showBetOutCome: boolean,
    showBetChoices: boolean,
    gameState: GameState,
    isGameFinished: boolean,
}


export interface Actions {
    choiceBet: (bet: Bet) => void,
    choiceComputerBet: (computerBet: GameChoice) => void,
    updateBalance: (type: "increase" | "decrease", amount: number) => void,
    setGameResult: (gameResult: GameResult) => void,
    setWinAmount: (winAmount: number) => void,
    toggleBetOutComeVisibility: () => void,
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
    gameResult: {
        gameOutcome: null,
        isSinglePosition: false,
        tieBet: null,
        winnerBet: null
    },
    showBetOutCome: false,
    showBetChoices: true,
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
            balance: state.balance + (type == "increase" ? amount : -amount)
        }))
    },
    setGameResult: (gameResult) => {
        set(() => ({
            gameResult
        }))
    },
    setWinAmount: (winAmount) => {
        set(() => ({
            winAmount
        }))
    },
    toggleBetOutComeVisibility: () => {
        set((state) => ({
            showBetOutCome: !state.showBetOutCome
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
        set(() => ({
            winAmount: 0,
            bets: [],
            computerBet: null,
            gameResult: {
                gameOutcome: null,
                isSinglePosition: false,
                tieBet: null,
                winnerBet: null
            },
            showBetOutCome: false,
            showBetChoices: true,
            gameState: GameState.Started,
            isGameFinished: false
        }))
    }
});


export const useGameStore = create(devtools(createState));

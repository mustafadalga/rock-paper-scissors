import { GameChoice } from "@/enums";

export const BET_AMOUNT: number = 500;
export const MAX_CHOICE_BET: number = 2

export const WIN_CONDITIONS: Record<GameChoice, GameChoice[]> = {
    [GameChoice.Rock]: [ GameChoice.Scissors ],
    [GameChoice.Paper]: [ GameChoice.Rock ],
    [GameChoice.Scissors]: [ GameChoice.Paper ],
};

export const CHOICE_COLORS = {
    [GameChoice.Rock]: {
        textColor: "text-dodger-blue",
        backgroundColor: "bg-midnight-blue",
        borderColor: "border-dodger-blue",
    },
    [GameChoice.Paper]: {
        textColor: "text-medium-sea-green",
        backgroundColor: "bg-dark-gray-slate",
        borderColor: "border-medium-sea-green",
    },
    [GameChoice.Scissors]: {
        textColor: "text-crimson",
        backgroundColor: "bg-maron",
        borderColor: "border-crimson",
    }
}

import { Variants } from 'framer-motion';
import { GameChoice } from "@/enums";

export interface ChoiceColors {
    textColor: string;
    backgroundColor: string;
    borderColor: string;
}


export const BET_AMOUNT: number = 500;
export const MAX_CHOICE_BET: number = 2;
export const MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER: number = 99999;


export const WIN_CONDITIONS: Record<GameChoice, GameChoice[]> = {
    [GameChoice.Rock]: [ GameChoice.Scissors ],
    [GameChoice.Paper]: [ GameChoice.Rock ],
    [GameChoice.Scissors]: [ GameChoice.Paper ],
};

export const CHOICE_COLORS: Record<GameChoice, ChoiceColors> = {
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

export const fadeInUpAnimation: Variants = {
    initial: { opacity: 0, y: -10, transition: { duration: 0.5 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.5 } }
};

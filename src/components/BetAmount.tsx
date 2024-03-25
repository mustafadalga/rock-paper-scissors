import useAnimatedNumber from "@/hooks/useAnimatedNumber";
import { MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER } from "@/constants";
import formatNumber from "@/utils/formatNumber";

export default function BetAmount({ amount }: { amount: number }) {
    const animatedAmount: string = useAnimatedNumber(amount);
    const formattedAmount: string = formatNumber(amount);
    const amountNumber: string = amount < MAXIMUM_THRESHOLD_FOR_ANIMATED_NUMBER ? animatedAmount : formattedAmount;

    return (
        <span
            className="grid place-items-center rounded-full aspect-square truncate w-14 text-[10px] md:text-xs bg-gains-boro border-4 border-solid border-royal-blue transition-all">
            {amountNumber}
        </span>
    )
}
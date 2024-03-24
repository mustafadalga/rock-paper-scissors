import useAnimatedNumber from "@/hooks/useAnimatedNumber";

export default function BetAmount({ amount }: { amount: number }) {
    return (
        <div
            className="grid place-items-center rounded-full w-10 h-10 text-[10px] md:text-xs bg-gains-boro border-4 border-solid border-royal-blue">
            {useAnimatedNumber(amount)}
        </div>
    )
}
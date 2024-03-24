import { useEffect, useState, useRef } from "react";


export default function useAnimatedNumber(targetNumber: number, duration: number = 500): string {
    const [ displayNumber, setDisplayNumber ] = useState<number>(0);
    const requestRef = useRef<number | undefined>();
    const startNumberRef = useRef<number>(displayNumber);

    useEffect(() => {
        const frameDuration: number = 1000 / 60; // Approximate duration of a frame at 60fps
        const totalFrames: number = Math.round(duration / frameDuration);
        let currentFrame: number = 0;

        const animate = () => {
            currentFrame++;
            const progress: number = currentFrame / totalFrames;
            const currentNumber: number = startNumberRef.current + (targetNumber - startNumberRef.current) * progress;

            setDisplayNumber(currentNumber);

            if (currentFrame < totalFrames) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                setDisplayNumber(targetNumber);
            }
        };

        startNumberRef.current = displayNumber;
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };

    }, [ targetNumber, duration ]);


    return displayNumber.toFixed(0);
}
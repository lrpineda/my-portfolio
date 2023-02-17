import { useMotionValue, useDeprecatedInvertedScale } from "framer-motion";
import { useEffect } from "react";

export function useInvertedBorderRadius(radius: number){
    const scaleX = useMotionValue(1);
    const scaleY = useMotionValue(1);
    const inverted = useDeprecatedInvertedScale({scaleX, scaleY});
    const borderRadius = useMotionValue(`${radius}px`);

    useEffect(() => {
        function updateRadius() {
            const latestX = inverted.scaleX.get();
            const latestY = inverted.scaleY.get();
            const xRadius = latestX * radius + "px";
            const yRadius = latestY * radius + "px";

            borderRadius.set(`${xRadius} ${yRadius}`);
        }

        const unsubScaleX = inverted.scaleX.onChange(updateRadius);
        const unsubScaleY = inverted.scaleY.onChange(updateRadius);

        return () => {
            unsubScaleX();
            unsubScaleY();
        };
    }, [radius]);

    return {
        scaleX,
        // scaleY,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    }
}
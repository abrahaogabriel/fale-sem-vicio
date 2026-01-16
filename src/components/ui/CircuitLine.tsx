import { motion } from "framer-motion";

interface CircuitLineProps {
    pathD: string;
    delay?: number;
}

export function CircuitLine({ pathD, delay = 0 }: CircuitLineProps) {
    return (
        <g className="overflow-visible">
            {/* Background Line (Dimmed) */}
            <path
                d={pathD}
                stroke="#DEFF00"
                strokeOpacity="0.3"
                strokeWidth="3"
                fill="none"
                vectorEffect="non-scaling-stroke"
            />

            {/* Moving "Ball" */}
            <motion.circle
                r="5"
                fill="#DEFF00"
                filter="drop-shadow(0 0 4px #DEFF00)"
            >
                <animateMotion
                    dur="6s"
                    repeatCount="indefinite"
                    path={pathD}
                    begin={`${delay}s`}
                />
            </motion.circle>
        </g>
    );
}

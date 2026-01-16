import { motion } from "framer-motion";

interface CircuitLineProps {
    pathD: string;
    delay?: number;
    duration?: number;
}

export function CircuitLine({ pathD, delay = 0, duration = 5 }: CircuitLineProps) {
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

            {/* Main "Data Packet" Ball */}
            <motion.circle
                r="5"
                fill="#DEFF00"
                filter="drop-shadow(0 0 4px #DEFF00)"
            >
                <animateMotion
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    path={pathD}
                    begin={`${delay}s`}
                />
            </motion.circle>

            {/* Secondary Occasional "Large" Ball */}
            <motion.circle
                r="8"
                fill="#DEFF00"
                filter="drop-shadow(0 0 6px #DEFF00)"
                opacity="0.8"
            >
                <animateMotion
                    dur={`${duration * 1.7}s`}
                    repeatCount="indefinite"
                    path={pathD}
                    begin={`${delay + 2}s`}
                />
            </motion.circle>
        </g>
    );
}

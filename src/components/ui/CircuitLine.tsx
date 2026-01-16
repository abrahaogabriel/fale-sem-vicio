import { motion } from "framer-motion";

interface CircuitLineProps {
    pathD: string;
    delay?: number;
}

export function CircuitLine({ pathD, delay = 0 }: CircuitLineProps) {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
            <svg className="w-full h-full overflow-visible">
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
                    r="3"
                    fill="#DEFF00"
                    filter="drop-shadow(0 0 4px #DEFF00)"
                >
                    <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path={pathD}
                        // If reverse is needed, we would need to reverse the path data or use keyPoints/keyTimes
                        // For simplicity, we assume pathD is drawn in the direction of flow (Center -> Card)
                        begin={`${delay}s`}
                    />
                </motion.circle>
            </svg>
        </div>
    );
}

import { motion } from "framer-motion";

interface PulseNodeProps {
    delay?: number;
    duration?: number;
}

export function PulseNode({ delay = 0, duration = 5 }: PulseNodeProps) {
    // Pulse animation timing
    // The ball takes 'duration' seconds to arrive.
    // So the first pulse happens at 'delay + duration'.
    // Then it repeats every 'duration' seconds.

    const pulseLength = 0.8; // Duration of the ripple effect
    const repeatDelay = duration - pulseLength;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
            {/* Outer Circle - Ripples on impact */}
            <motion.circle
                cx="43.5"
                cy="43.5"
                r="43.5"
                transform="rotate(-180 43.5 43.5)"
                fill="#DEFF00"
                initial={{ opacity: 0.2, scale: 1 }}
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                transition={{
                    duration: pulseLength,
                    ease: "easeOut",
                    delay: delay + duration, // Sync with arrival
                    repeat: Infinity,
                    repeatDelay: repeatDelay
                }}
            />
            {/* Middle Circle */}
            <motion.circle
                cx="43.5"
                cy="43.5"
                r="28.5"
                transform="rotate(-180 43.5 43.5)"
                fill="#DEFF00"
                initial={{ opacity: 0.3, scale: 1 }}
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
                transition={{
                    duration: pulseLength,
                    ease: "easeOut",
                    delay: delay + duration, // Simultaneous impact
                    repeat: Infinity,
                    repeatDelay: repeatDelay
                }}
            />
            {/* Inner Circle (Solid) - Flashes on impact */}
            <motion.circle
                cx="43"
                cy="44"
                r="14"
                transform="rotate(-180 43 44)"
                fill="#DEFF00"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: [1, 0.5, 1], scale: [1, 1.3, 1] }}
                transition={{
                    duration: pulseLength,
                    ease: "easeOut",
                    delay: delay + duration,
                    repeat: Infinity,
                    repeatDelay: repeatDelay
                }}
            />
        </svg>
    );
}

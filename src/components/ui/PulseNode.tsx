import { motion } from "framer-motion";

export function PulseNode() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
            {/* Outer Circle */}
            <motion.circle
                cx="43.5"
                cy="43.5"
                r="43.5"
                transform="rotate(-180 43.5 43.5)"
                fill="#DEFF00"
                fillOpacity="0.47"
                animate={{ opacity: [0.47, 0.2, 0.47], scale: [1, 0.95, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Middle Circle */}
            <motion.circle
                cx="43.5"
                cy="43.5"
                r="28.5"
                transform="rotate(-180 43.5 43.5)"
                fill="#DEFF00"
                fillOpacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            {/* Inner Circle (Solid) */}
            <motion.circle
                cx="43"
                cy="44"
                r="14"
                transform="rotate(-180 43 44)"
                fill="#DEFF00"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    );
}

import { motion } from "framer-motion";

export function PulseNode() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="87" viewBox="0 0 87 87" fill="none">
            <motion.circle
                cx="43.5"
                cy="43.5"
                r="43.5"
                transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 7.60578e-06 87)"
                fill="#DEFF00"
                fillOpacity="0.47"
                animate={{ opacity: [0.47, 0.2, 0.47], scale: [1, 0.95, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
                cx="28.5"
                cy="28.5"
                r="28.5"
                transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 15 72)"
                fill="#DEFF00"
                fillOpacity="0.3"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.circle
                cx="14"
                cy="14"
                r="14"
                transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 30 58)"
                fill="#DEFF00"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    );
}

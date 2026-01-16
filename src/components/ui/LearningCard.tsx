import { motion } from "framer-motion";

interface LearningCardProps {
    title: string;
    description: string;
}

export function LearningCard({ title, description }: LearningCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative w-full max-w-[391px] h-auto min-h-[168px] backdrop-blur-[13px] bg-brand-lime/10 border border-[#CCCCCC]/35 rounded-[20px] transition-all duration-300 hover:bg-brand-lime flex flex-col justify-start p-8 gap-2"
        >
            <h3 className="text-[22px] font-sora font-semibold text-brand-lime group-hover:text-black transition-colors">
                {title}
            </h3>
            <p className="text-[16px] text-white/75 font-sora leading-[1.4] group-hover:text-black transition-colors">
                {description}
            </p>
        </motion.div>
    );
}

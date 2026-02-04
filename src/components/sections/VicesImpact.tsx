import { motion } from "framer-motion";

const imgEye = "assets/icon-eye-slash.svg";
const imgShield = "assets/icon-shield-slash.svg";
const imgStar = "assets/icon-star-slash.svg";

const cards = [
    {
        icon: imgEye,
        text: "Menos ",
        highlight: "atenção",
    },
    {
        icon: imgShield,
        text: "Menos ",
        highlight: "confiança",
    },
    {
        icon: imgStar,
        text: "Menos ",
        highlight: "respeito",
    }
];

export function VicesImpact() {
    return (
        <section className="relative w-full bg-[#3D3D3D] py-10 md:py-[80px] px-[15px] md:px-[120px] flex flex-col items-center overflow-hidden">
            {/* Background Gradient Detail (Optional but premium) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-lime/20 to-transparent" />

            {/* H1 */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[24px] md:text-[40px] leading-[1.2] text-center mb-6 max-w-[1244px] font-sora"
            >
                <span className="text-brand-lime font-bold">Vícios de linguagem </span>
                <span className="text-white font-normal">te prejudicam mais do que você imagina</span>
            </motion.h2>

            {/* H2 */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white text-lg md:text-[22px] text-center mb-16 font-sora"
            >
                Quem te escuta sente insegurança e tudo isso gera:
            </motion.p>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-[40px] md:gap-[63px] mb-16 w-full max-w-[1350px]">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2 + (i * 0.1),
                            ease: [0.215, 0.61, 0.355, 1]
                        }}
                        whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.12)",
                            borderColor: "rgba(222, 255, 0, 0.4)"
                        }}
                        className="w-full md:w-[391px] h-[168px] backdrop-blur-[13px] bg-white/10 border border-white/20 rounded-[20px] flex items-center justify-center gap-4 md:gap-6 px-[15px] md:px-8 transition-colors duration-300"
                    >
                        <div className="w-[31px] h-auto flex-shrink-0">
                            <img src={card.icon} alt="icon" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-[24px] md:text-[28px] text-white font-sora leading-none">
                            {card.text}
                            <span className="text-brand-lime font-bold">{card.highlight}</span>
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Footer Text */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="text-white text-[22px] md:text-[32px] text-center max-w-[1100px] font-sora leading-tight"
            >
                Falar sem vício vai transformar sua <span className="text-brand-lime font-bold italic">comunicação, influência e autoridade.</span>
            </motion.p>
        </section>
    );
}

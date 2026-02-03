import { motion, useScroll, useTransform } from "framer-motion";
import TextType from "../ui/TextType";

// Assets
const imgBgHero = "assets/bg-hero-new.png";
const imgBgHeroMobile = "assets/bg-hero-mobile.png";
const imgLogoPng = "logo-fale.png";
const imgArrow = "assets/arrow.svg";

export function Hero() {
    const { scrollY } = useScroll();

    // Parallax Offsets
    const yBg = useTransform(scrollY, [0, 800], [0, 150]);
    const yContent = useTransform(scrollY, [0, 800], [0, -30]);

    // Fade effects
    const opacityBg = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">

            {/* --- BACKGROUND IMAGE --- */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="absolute inset-0 z-0 pointer-events-none"
            >
                {/* Desktop Background */}
                <img
                    src={imgBgHero}
                    alt="Background Desktop"
                    className="hidden md:block w-full h-full object-cover object-center"
                    fetchPriority="high"
                />
                {/* Mobile Background */}
                <img
                    src={imgBgHeroMobile}
                    alt="Background Mobile"
                    className="block md:hidden w-full h-full object-cover object-top"
                    fetchPriority="high"
                />

                {/* Top Gradient Overlay (Mobile focus) */}
                <div
                    className="absolute inset-x-0 top-0 h-[30vh] md:h-[20vh] z-10"
                    style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)' }}
                />

                {/* Bottom Gradient Overlay (Mobile focus) */}
                <div
                    className="absolute inset-x-0 bottom-0 h-[50vh] md:hidden z-10"
                    style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)' }}
                />
            </motion.div>

            {/* --- CONTENT CONTAINER --- */}
            <motion.div
                style={{ y: yContent }}
                className="relative z-10 flex flex-col h-full min-h-screen px-[20px] md:px-[120px] pt-[40px] md:py-[60px]"
            >
                {/* --- LOGO (Top) --- */}
                <div className="flex-none w-full flex justify-center md:justify-start">
                    <img
                        src={imgLogoPng}
                        alt="Fale Sem Vício"
                        className="w-[200px] md:w-[225px] h-auto"
                    />
                </div>

                {/* --- SPACER (Mobile only) --- */}
                <div className="flex-grow md:hidden" />

                {/* --- MAIN CONTENT (Bottom anchored) --- */}
                <div className="flex-none flex flex-col items-center md:items-start text-center md:text-left max-w-[700px] w-full pb-[40px] md:pb-0 md:mt-0">

                    {/* H1 - Line 1 */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-sora font-bold text-[18px] md:text-[40px] text-brand-lime leading-[1.1] mb-2 uppercase"
                    >
                        PARE DE VEZ COM OS
                    </motion.p>

                    {/* H1 - Line 2 (Animated Component) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="h-[70px] md:h-[140px] overflow-hidden mb-2 flex items-center justify-center md:justify-start w-full"
                    >
                        <TextType
                            text={["ÉÉÉÉ...", "ENTÃÃO...", "TIPO...", "MAS...", "ENTÃO..."]}
                            as="span"
                            pauseDuration={2000}
                            deletingSpeed={50}
                            cursorBlinkDuration={1}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName="text-brand-lime"
                            className="font-['SF_Pro_Display',system-ui,sans-serif] font-bold text-[60px] md:text-[120px] text-brand-lime leading-none uppercase"
                        />
                    </motion.div>

                    {/* H1 - Line 3 */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="font-sora font-bold text-[18px] md:text-[40px] text-white leading-[1.1] mb-6 md:mb-8 uppercase"
                    >
                        QUE ENFRAQUECEM SUA FALA
                    </motion.p>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="font-figtree font-normal text-[14px] md:text-[28px] text-white leading-[1.6] tracking-[1.15px] mb-8 md:mb-10 max-w-full md:max-w-[700px] px-4 md:px-0"
                    >
                        Elimine os <span className="font-semibold text-brand-lime">vícios de linguagem</span> que atrapalham sua comunicação e te geram falta de confiança.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <a
                            href="#preco"
                            className="inline-flex items-center gap-[12px] md:gap-[14px] border border-brand-lime rounded-[8px] px-[32px] md:px-[48px] py-[14px] md:py-[16px] group transition-all duration-300 hover:bg-brand-lime/10"
                        >
                            <span className="font-sora font-medium text-[14px] md:text-[20px] text-brand-lime uppercase tracking-wide">
                                Quero falar sem vício
                            </span>
                            <div className="w-[14px] md:w-[16px] h-[14px] md:h-[16px] flex items-center justify-center shrink-0">
                                <img
                                    src={imgArrow}
                                    alt="Arrow"
                                    className="w-full h-full transition-transform group-hover:translate-x-1"
                                />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* --- BOTTOM DIVISOR --- */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1500px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #DEFF00 50%, rgba(0,0,0,0) 100%)' }}
            />

        </section>
    );
}

import { motion, useScroll, useTransform } from "framer-motion";
import TextType from "../ui/TextType";
import BlurText from "../ui/BlurText";

// Assets (Local now)
const imgBgMain = "/assets/bg-main.png";
const imgGiovanni = "/assets/giovanni.png";
const imgSmoke = "/assets/smoke.png";
const imgSmokeMask = "/assets/smoke-mask.png";
const imgLogoPng = "/logo-fale.png";
const imgArrow = "/assets/arrow.svg";

export function Hero() {
    const { scrollY } = useScroll();

    // Parallax Offsets: Values adjusted for more noticeable depth.
    const yBg = useTransform(scrollY, [0, 800], [0, 300]);
    const yTextType = useTransform(scrollY, [0, 800], [0, 180]);
    const yGiovanni = useTransform(scrollY, [0, 800], [0, 100]);
    const yForeground = useTransform(scrollY, [0, 800], [0, -50]); // Moving slightly up for more contrast

    // Fade-to-Black and Opacity effects for background layers
    const opacityTextType = useTransform(scrollY, [0, 500], [0.8, 0]);
    const brightnessBg = useTransform(scrollY, [0, 500], ["brightness(1)", "brightness(0)"]);
    const opacityBg = useTransform(scrollY, [0, 600], [1, 0]);

    // Giovanni Fades slightly later and not fully, plus a subtle blur to smooth edges
    const brightnessVal = useTransform(scrollY, [300, 900], [1, 0.3]);
    const blurVal = useTransform(scrollY, [0, 600], [0, 10]);
    const filterGiovanni = useTransform(
        [brightnessVal, blurVal],
        ([bright, blur]: any[]) => `brightness(${bright}) blur(${blur}px)`
    );
    const opacityGiovanni = useTransform(scrollY, [300, 900], [1, 0.6]);

    return (
        <section className="relative w-full h-screen bg-brand-dark overflow-hidden flex flex-col items-center">

            {/* --- LAYER 1: MAIN BACKGROUND PNG --- */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg, filter: brightnessBg }}
                className="absolute inset-0 z-0 pointer-events-none flex justify-center"
            >
                <img
                    src={imgBgMain}
                    alt="Background"
                    className="w-full h-full object-cover scale-110" // scale slightly to avoid white gaps on edges
                    fetchPriority="high"
                />
            </motion.div>

            {/* --- LAYER 2: LARGE BEBAS NEUE OUTLINE ANIMATED TEXT --- */}
            <motion.div
                style={{ y: yTextType, opacity: opacityTextType }}
                className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden pb-[15vh]"
            >
                <TextType
                    text={["ÉÉÉÉÉÉÉÉ!", "ENTÃÃOOOO...", "TIPO... TIPO...", "MAS... MAS...", "ÉÉÉÉ... QUE", "ENTÃO..."]}
                    as="h2"
                    pauseDuration={2000}
                    deletingSpeed={45}
                    cursorBlinkDuration={1}
                    showCursor={false}
                    cursorCharacter="|"
                    cursorClassName="font-sans text-white/50" // generic font to avoid Bebas Neue square
                    className="font-bebas text-[50px] md:text-[max(20vw,200px)] leading-none text-center whitespace-nowrap"
                    style={{
                        WebkitTextStroke: '2px #FFFFFF',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.8
                    }}
                />
            </motion.div>

            {/* --- LAYER 3: SPECIALIST & SMOKE EFFECTS --- */}
            <motion.div
                style={{ y: yGiovanni, opacity: opacityGiovanni, filter: filterGiovanni }}
                className="absolute inset-0 z-20 flex justify-center items-end pointer-events-none pb-[20vh] md:pb-[12vh]"
            >
                {/* Giovanni (El Professor) - Sized to exactly 733px width from Figma */}
                <div className="relative w-full max-w-[733px] px-4 flex justify-center items-end h-full">

                    {/* Smoke Effect Box */}
                    <div
                        className="absolute bottom-0 w-[150%] h-[60%] z-0 mix-blend-screen opacity-40 translate-y-[20%]"
                        style={{
                            backgroundImage: `url(${imgSmoke})`,
                            maskImage: `url(${imgSmokeMask})`,
                            maskSize: '100% 100%',
                            maskPosition: 'center',
                            maskRepeat: 'no-repeat'
                        }}
                    />

                    <img
                        src={imgGiovanni}
                        alt="Giovanni Begossi"
                        className="w-full h-auto block relative z-10 max-h-[80vh] object-contain"
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </motion.div>

            {/* --- LAYER 4: GLOBAL FRONT GRADIENT (Covers Giovanni & BG) --- */}
            <div
                className="absolute inset-0 z-30 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,1) 100%)' }}
                data-name="Degradê Frente"
            />

            {/* --- LAYER 5: LOGO --- */}
            <motion.div
                style={{ y: yForeground }}
                className="absolute top-[80px] left-1/2 -translate-x-1/2 md:left-[120px] md:translate-x-0 z-40 pointer-events-none"
            >
                <div className="w-[225px]">
                    <img
                        src={imgLogoPng}
                        alt="Logo"
                        className="w-full h-auto block"
                    />
                </div>
            </motion.div>

            {/* --- LAYER 6: MAIN HEADLINE & CTA --- */}
            <motion.div
                style={{ y: yForeground }}
                className="relative z-50 flex flex-col items-center text-center mt-auto pb-[6vh] px-6 w-full max-w-[1440px]"
            >
                <div className="mb-8 w-full max-w-[1415px]">
                    <BlurText
                        text={[
                            { text: "Elimine os vícios de linguagem", className: "font-bold text-brand-lime" },
                            { text: "que atrapalham sua comunicação, enfraquecem sua fala e te geram falta de confiança.", className: "font-medium text-white" }
                        ]}
                        delay={50}
                        animateBy="words"
                        direction="bottom"
                        className="text-[22px] md:text-[40px] leading-[1.2] text-center justify-center"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                    <a href="#preco" className="btn-outline flex items-center gap-4 group cursor-pointer pointer-events-auto shrink-0 px-6 md:px-12">
                        <span className="uppercase tracking-wide font-medium text-[16px] md:text-[20px] whitespace-nowrap">Quero falar sem vício</span>
                        <div className="w-[18px] h-[18px] flex items-center justify-center">
                            <img
                                src={imgArrow}
                                alt="Arrow"
                                className="w-full h-full transition-transform group-hover:translate-x-1"
                            />
                        </div>
                    </a>
                </motion.div>
            </motion.div>

            {/* --- LAYER 7: DIVISOR --- */}
            <motion.div
                style={{
                    y: yForeground,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #DEFF00 50%, rgba(0,0,0,0) 100%)'
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1500px] h-[1px]"
            />

        </section>
    );
}

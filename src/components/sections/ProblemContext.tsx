import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const imgIconLogo = "/assets/icon-logo.svg";
const imgArrow = "/assets/arrow.svg";

const VICES = ["ÉÉÉÉÉÉ!", "ENTÃÃOOOO...", "ÉÉ... QUE, ENTÃO...", "TIPO... TIPO...", "MAS... MAS..."];

function EchoTitle() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % VICES.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[280px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    {/* Ghost Echo Layer */}
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute font-bebas text-[max(15vw,120px)] leading-none text-center whitespace-nowrap select-none"
                        style={{
                            WebkitTextStroke: '1px #DEFF0033',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {VICES[index]}
                    </motion.div>

                    {/* Main Outline Text */}
                    <h2
                        className="font-bebas text-[max(12vw,120px)] leading-none text-center whitespace-nowrap select-none"
                        style={{
                            WebkitTextStroke: '2px #DEFF00',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {VICES[index]}
                    </h2>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export function ProblemContext() {
    return (
        <section className="relative w-full bg-brand-dark py-[80px] px-6 md:px-[80px] flex flex-col items-center overflow-hidden">

            {/* Logo Icon - Width fixed to 86px to match Figma without stretching */}
            <div className="mb-[30px] flex justify-center">
                <img src={imgIconLogo} alt="Logo Icon" className="w-[86px] h-auto object-contain" />
            </div>

            {/* Main Title */}
            <div className="max-w-[1920px] text-center mb-[30px]">
                <h2 className="text-[32px] md:text-[40px] leading-[1.2] text-white">
                    <span className="text-brand-lime font-bold">Vício de linguagem</span> é um problema que acompanha a maior parte dos brasileiros.
                </h2>
            </div>

            {/* Subtitle Box */}
            <div className="max-w-[1412px] w-full mb-[40px] bg-brand-lime/10 border border-brand-lime rounded-[12px] px-[30px] py-[20px] text-center">
                <p className="text-white text-lg md:text-[22px] leading-[1.6]">
                    Quando você não se comunica bem estes vícios entram no meio da frase, <span className="font-bold">quebram o raciocínio e enfraquecem sua fala</span><br className="hidden md:block" /> sem que você perceba. Não importa se o conteúdo é bom ou se você domina o assunto. Quando a fala é interrompida por
                </p>
            </div>

            {/* New "Echo" Word Animation */}
            <div className="w-full mb-[30px] bg-black/20 rounded-2xl">
                <EchoTitle />
            </div>

            {/* Ending Phrase */}
            <div className="text-center mb-[30px]">
                <h3 className="text-[28px] md:text-[28px] font-bold text-white">
                    a mensagem perde força.
                </h3>
            </div>

            {/* CTA */}
            <div className="mb-[20px]">
                <button className="btn-outline flex items-center gap-4 group">
                    <span className="uppercase tracking-wide font-medium text-lg md:text-[20px]">Quero corrigir esses problemas</span>
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                        <img
                            src={imgArrow}
                            alt="Arrow"
                            className="w-full h-full transition-transform group-hover:translate-x-1"
                        />
                    </div>
                </button>
            </div>


        </section>
    );
}

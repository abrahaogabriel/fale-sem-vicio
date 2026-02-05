import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgFaqHeader from "../../assets/faq_header.png";

const FAQ_ITEMS = [
    {
        question: "E se eu não tiver tempo para fazer o curso?",
        answer: "As aulas são curtas e diretas (10-15 minutos em média). Você consegue assistir no trajeto para o trabalho, no horário de almoço, ou até mesmo antes de dormir."
    },
    {
        question: "Quanto custa esse curso?",
        answer: "O valor é de 12x R$10,18 ou à vista por R$97,00"
    },
    {
        question: "Este curso é pra quem?",
        answer: "Ele pode ser consumido por qualquer pessoa, dos 5 a 85 anos, independente de sua profissão. Ele literalmente vai desbloquear sua comunicação, eliminando por completo vícios de linguagem, e tornando sua comunicação clara, assertiva e persuasiva"
    },
    {
        question: "E se eu não gostar?",
        answer: "Você terá dias de garantia incondicional após a compra. Se você achar que não é pra você, é só solicitar reembolso. Sem perguntas, sem burocracia."
    },
    {
        question: "Como receberei o acesso?",
        answer: "O acesso será enviado imediatamente após a sua compra em seu e-mail e também no seu WhatsApp! Caso não tenha recebido, verifique o seu spam. Se necessário, entre em contato com nosso suporte."
    },
    {
        question: "Qual o contato do suporte?",
        answer: "Nosso suporte atende em horário comercial (08h às 19h de Segunda a Sexta) diretamente no WhatsApp +55 11 96494-2986"
    },
    {
        question: "Por quanto tempo terei acesso?",
        answer: "Você terá acesso por 1 ano para assistir quantas vezes quiser!"
    }
];

// Custom Icons provided by user
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="8" width="4" height="20" fill="#DEFF00" />
        <rect x="20" y="8" width="4" height="20" transform="rotate(90 20 8)" fill="#DEFF00" />
    </svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4" fill="none">
        <rect x="20" width="4" height="20" transform="rotate(90 20 0)" fill="#DCB058" />
        <rect x="20" width="4" height="20" transform="rotate(90 20 0)" fill="#DEFF00" />
    </svg>
);

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-black py-10 md:py-20 px-[15px] xl:px-[120px] flex flex-col items-center overflow-hidden">

            {/* Header Image */}
            <div className="mb-[60px] w-full max-w-[1240px] flex justify-center">
                <img src={imgFaqHeader} alt="FAQ Perguntas Frequentes" className="max-w-full h-auto" />
            </div>

            {/* Accordion List */}
            <div className="w-full max-w-[1240px] border-t border-white/50">
                {FAQ_ITEMS.map((item, index) => (
                    <div key={index} className="border-b border-white/50">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full py-9 px-4 md:px-10 flex items-center justify-between gap-4 bg-transparent cursor-pointer group text-left transition-colors"
                        >
                            <span className="font-sora text-[24px] md:text-[28px] text-white leading-normal">
                                {item.question}
                            </span>
                            <div className="shrink-0">
                                {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 md:px-10 pb-9">
                                        <p className="font-sora text-[16px] md:text-[18px] text-white/80 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

        </section>
    );
}

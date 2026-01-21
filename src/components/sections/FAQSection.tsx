import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgFaqHeader from "../../assets/faq_header.png";

const FAQ_ITEMS = [
    {
        question: "Onde irei receber o acesso do treinamento?",
        answer: "Sim, tantos as aulas teóricas como os encontros AO VIVO ficaram gravados na plataforma." // Recovered from Figma inspection
    },
    {
        question: "Por quanto tempo terei acesso às aulas?",
        answer: "Você terá acesso vitalício ao conteúdo do curso, podendo assistir quando e quantas vezes quiser."
    },
    {
        question: "Quantos dias de garantia tenho do treinamento?",
        answer: "Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo, devolvemos 100% do seu dinheiro."
    },
    {
        question: "Para quem é o curso?",
        answer: "O curso é para qualquer pessoa que deseja melhorar sua comunicação, seja para fins profissionais ou pessoais, e eliminar vícios de linguagem."
    },
    {
        question: "Esse curso é para quem já fala bem?",
        answer: "Sim! Mesmo quem já se comunica bem pode refinar sua técnica, eliminar pequenos vícios insconscientes e ter mais impacto e presença."
    },
    {
        question: "Preciso decorar frases ou mudar meu jeito de falar?",
        answer: "Não. O método ensina você a ser autêntico e natural, corrigindo apenas o que atrapalha sua mensagem, sem criar um personagem."
    },
    {
        question: "Em quanto tempo começo a perceber diferença na minha fala?",
        answer: "Muitos alunos relatam diferença logo nas primeiras aulas, ao aplicarem as técnicas de consciência e pausa."
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
        <section className="relative w-full bg-black py-20 px-6 xl:px-[120px] flex flex-col items-center overflow-hidden">

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
                            <span className="font-sora text-[18px] md:text-[28px] text-white leading-normal">
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

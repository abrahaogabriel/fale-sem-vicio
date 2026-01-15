import { motion } from "framer-motion";
import BlurText from "../ui/BlurText";

const imgCard1 = "/assets/bg-card-reunioes.png";
const imgCard2 = "/assets/bg-card-apresentacoes.png";
const imgCard3 = "/assets/bg-card-conversas.png";
const imgCard4 = "/assets/bg-card-videos.png";
const imgCard5 = "/assets/bg-card-whatsapp.png";
const imgArrow = "/assets/arrow.svg";

interface CardProps {
    bg: string;
    title: string;
    description: string;
    index: number;
}

const Card = ({ bg, title, description, index }: CardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="relative w-[396px] h-[380px] rounded-[14px] overflow-hidden border border-white/10 group cursor-pointer"
    >
        <img
            src={bg}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-8 left-0 right-0 px-6 text-center">
            <p className="text-[18px] leading-[1.3] text-[#BCBCBC]">
                <span className="font-bold text-brand-lime">{title}</span>, {description}
            </p>
        </div>
    </motion.div>
);

export function ProblematicMoments() {
    const cards = [
        { bg: imgCard1, title: "Em reuniões", description: "quando você precisa se posicionar." },
        { bg: imgCard2, title: "Em apresentações", description: "quando precisa explicar uma ideia." },
        { bg: imgCard3, title: "Em conversas importantes", description: "quando você não pode mostrar insegurança." },
        { bg: imgCard4, title: "Em vídeos", description: "quando precisa manter o raciocínio." },
        { bg: imgCard5, title: "Em áudios no WhatsApp", description: "quando tentar ser objetivo." },
    ];

    return (
        <section className="relative w-full bg-brand-dark py-[112px] px-6 md:px-[120px] flex flex-col items-center overflow-hidden">

            <div className="text-center mb-16 max-w-[1200px]">
                <BlurText
                    text={[
                        { text: "Isso não acontece só quando", className: "font-medium text-white" },
                        { text: "você está nervoso.", className: "font-bold text-brand-lime" }
                    ]}
                    delay={40}
                    animateBy="words"
                    direction="bottom"
                    className="text-[32px] md:text-[40px] leading-[1.2] mb-4"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-[#BCBCBC] text-lg md:text-[22px]"
                >
                    Os vícios de linguagem aparecem justamente nos momentos em que sua fala deveria ser clara e direta:
                </motion.p>
            </div>

            {/* Grid Row 1 */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 max-w-[1300px]">
                {cards.slice(0, 3).map((card, i) => (
                    <Card key={i} {...card} index={i} />
                ))}
            </div>

            {/* Grid Row 2 */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 max-w-[1300px]">
                {cards.slice(3).map((card, i) => (
                    <Card key={i + 3} {...card} index={i + 3} />
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
            >
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
            </motion.div>

        </section>
    );
}

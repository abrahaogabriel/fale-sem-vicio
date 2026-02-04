import { motion } from "framer-motion";
import BlurText from "../ui/BlurText";

const imgCard1 = "assets/bg-card-reunioes.png";
const imgCard2 = "assets/bg-card-apresentacoes.png";
const imgCard3 = "assets/box3-actor.png";
const imgCard4 = "assets/bg-card-videos.png";
const imgCard5 = "assets/bg-card-whatsapp.png";
const imgArrow = "assets/arrow.svg";

interface CardProps {
    bg: string;
    title: string;
    description: string;
    index: number;
}

const Card = ({ bg, title, description, index }: CardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.77, y: 0 }}
        whileHover={{ opacity: 1, scale: 1.02 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="relative w-full md:w-[396px] h-[380px] rounded-[8px] overflow-hidden border border-[#4E4E4E] group cursor-pointer"
    >
        <img
            src={bg}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42%, #000 100%) */}
        <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42%, #000 100%)' }}
        />

        {/* Content */}
        <div className="absolute bottom-8 left-0 right-0 px-[15px] text-center z-10">
            <p className="text-[20px] md:text-[22px] leading-[1.3] text-[#BCBCBC]">
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
        <section className="relative w-full bg-brand-dark py-10 md:py-[80px] px-[15px] md:px-[120px] flex flex-col items-center overflow-hidden">

            <div className="w-full flex flex-col items-center text-center mb-16 max-w-[1200px]">
                <BlurText
                    text={[
                        { text: "Isso não acontece só quando", className: "font-normal text-white" },
                        { text: "você está nervoso.", className: "font-bold text-brand-lime" }
                    ]}
                    delay={40}
                    animateBy="words"
                    direction="bottom"
                    className="text-[24px] md:text-[40px] leading-[1.2] mb-4 text-center justify-center"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-[#FFFFFF] text-lg md:text-[22px]"
                >
                    Os vícios de linguagem aparecem justamente nos momentos em que sua fala deveria ser clara e direta:
                </motion.p>
            </div>

            {/* Grid Row 1 */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 max-w-[1300px] w-full">
                {cards.slice(0, 3).map((card, i) => (
                    <Card key={i} {...card} index={i} />
                ))}
            </div>

            {/* Grid Row 2 */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 max-w-[1300px] w-full">
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
                className="w-full flex justify-center"
            >
                <a href="#preco" className="btn-primary px-6 md:px-12 w-full md:w-auto justify-center">
                    <span className="uppercase tracking-wide font-medium text-[14px] md:text-[20px] text-center">Quero corrigir esses problemas</span>
                </a>
            </motion.div>

            {/* Divisor */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #DEFF00 50%, rgba(0,0,0,0) 100%)' }}
            />

        </section>
    );
}

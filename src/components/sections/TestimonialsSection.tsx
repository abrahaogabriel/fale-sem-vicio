import { TestimonialCard } from "../ui/TestimonialCard";
import imgAllan from "../../assets/allan.png";
import imgCarlos from "../../assets/carlos.png";
import imgSara from "../../assets/sara.png";
import imgThiago from "../../assets/thiago.png";

export function TestimonialsSection() {
    return (
        <section className="relative w-full bg-black py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
            {/* Title */}
            <div className="w-full max-w-[900px] mb-[60px] text-center relative z-10">
                <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-helvetica font-bold text-center">
                    <span className="text-white font-normal block md:inline">Depoimentos de quem fez o curso agora fala </span>
                    <span className="text-[#DEFF00]">Sem Vícios de linguagem</span>
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-[20px] justify-items-center">
                {/* Card 1 */}
                <TestimonialCard
                    name="Allan Ferreira"
                    role="Professor"
                    initials="AF"
                    imageSrc={imgAllan}
                    description={
                        <>
                            O meu objetivo principal nesse curso foi <span className="bg-[#DEFF00]/25 text-white px-1">simplesmente melhorar minha dicção</span>, porque <span className="bg-[#DEFF00]/25 text-white px-1">eu sempre falava muito rápido</span>, comia as palavras e sempre me incomodou quando as pessoas pediam para eu repetir, falar novamente.
                        </>
                    }
                />

                {/* Card 2 */}
                <TestimonialCard
                    name="Carlos Souza"
                    role="Telemarketing"
                    initials="CS"
                    imageSrc={imgCarlos}
                    description={
                        <>
                            Hoje eu me sinto <span className="bg-[#DEFF00]/25 text-white px-1">uma pessoa mais autoconfiante</span>, <span className="bg-[#DEFF00]/25 text-white px-1">mais interessante e que as pessoas</span> buscam por conversar comigo.
                        </>
                    }
                />

                {/* Card 3 */}
                <TestimonialCard
                    name="Sara Menezes"
                    role="Head de operações"
                    initials="SM"
                    imageSrc={imgSara}
                    description={
                        <>
                            Então, realmente isso foi <span className="bg-[#DEFF00]/25 text-white px-1">uma transformação</span> muito grande, não apenas na minha carreira, mas também na <span className="bg-[#DEFF00]/25 text-white px-1">minha vida profissional</span>.
                        </>
                    }
                />

                {/* Card 4 */}
                <TestimonialCard
                    name="Thiago Tuller"
                    role="Relações Públicas"
                    initials="TT"
                    imageSrc={imgThiago}
                    description={
                        <>
                            E eu achava que eu <span className="bg-[#DEFF00]/25 text-white px-1">não tinha como mudar isso</span>. Até que um dia eu ouvi e <span className="bg-[#DEFF00]/25 text-white px-1">conheci o Giovanni por meio de um podcast</span>.
                        </>
                    }
                />
            </div>
        </section>
    );
}

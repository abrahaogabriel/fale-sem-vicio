import { TestimonialCard } from "../ui/TestimonialCard";

export function TestimonialsSection() {
    return (
        <section className="relative w-full bg-black py-20 px-6 md:px-[60px] lg:px-[120px] flex flex-col items-center justify-center overflow-hidden">
            {/* Title */}
            <div className="w-full max-w-[900px] mb-16 text-center">
                <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-helvetica font-bold text-center">
                    <span className="text-white font-normal block md:inline">Depoimentos de quem fez o curso e agora fala </span>
                    <span className="text-[#DEFF00]">Sem Vícios de linguagem</span>
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-stretch justify-center gap-5 md:gap-8">
                {/* Card 1 */}
                <TestimonialCard
                    name="Allan Ferreira"
                    initials="AF"
                    description={
                        <>
                            O meu objetivo principal nesse curso foi <span className="bg-[#DEFF00]/25 px-1 rounded-sm text-white">simplesmente melhorar minha dicção</span>, porque eu sempre <span className="bg-[#DEFF00]/25 px-1 rounded-sm text-white">falava muito rápido</span>, comia as palavras e sempre me incomodou quando as pessoas pediam para eu repetir, falar novamente.
                        </>
                    }
                />

                {/* Card 2 */}
                <TestimonialCard
                    name="Carlos Souza"
                    initials="CS"
                    description={
                        <>
                            Hoje eu me sinto <span className="bg-[#DEFF00]/25 px-1 rounded-sm text-white">uma pessoa mais autoconfiante</span>, <span className="bg-[#DEFF00]/25 px-1 rounded-sm text-white">mais interessante</span> e que as pessoas buscam por conversar comigo.
                        </>
                    }
                />

                {/* Card 3 */}
                <TestimonialCard
                    name="Sara Menezes"
                    initials="SM"
                    description={
                        <>
                            Então, realmente isso foi <span className="bg-[#DEFF00]/25 px-1 rounded-sm text-white">uma transformação muito grande</span>, não apenas na minha carreira, mas também na <span className="bg-[#DEFF00]/25 px-1 rounded-sm text-white">minha vida profissional</span>.
                        </>
                    }
                />
            </div>
        </section>
    );
}

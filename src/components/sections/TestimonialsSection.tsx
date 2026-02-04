import { TestimonialCard } from "../ui/TestimonialCard";
import imgGregory from "../../assets/testimonial-gregory.png";
import imgPriscila from "../../assets/testimonial-priscila.png";
import imgAndre from "../../assets/testimonial-andre.png";
import imgCleitton from "../../assets/testimonial-cleitton.png";

export function TestimonialsSection() {
    return (
        <section className="relative w-full bg-black py-10 md:py-20 px-[15px] flex flex-col items-center justify-center overflow-hidden">
            {/* Title */}
            <div className="w-full max-w-[900px] mb-[60px] text-center relative z-10">
                <h2 className="text-[24px] md:text-[40px] leading-[1.2] font-helvetica font-bold text-center text-white">
                    Veja o que estão falando sobre o <span className="text-[#DEFF00]">Fale sem vício</span>
                </h2>
            </div>

            {/* Cards Grid */}
            <div className="w-full max-w-[1800px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-[20px] justify-items-center">
                {/* Card 1 */}
                <TestimonialCard
                    name="Gregory Couto"
                    role="Estrategista - Marketing Digital"
                    initials="GC"
                    imageSrc={imgGregory}
                    description={
                        <>
                            Eu tinha alguns bloqueios com minha comunicação e com minha dicção, principalmente em minha maneira de falar com vícios de linguagem! <span className="bg-[#DEFF00]/25 text-white px-1">Graças ao curso, eu consegui melhorar muito minha comunicação, e hoje tenho minha própria mentoria de marketing</span> e estou atingindo os resultados que eu tanto esperava!
                        </>
                    }
                />

                {/* Card 2 */}
                <TestimonialCard
                    name="Priscila Núbia"
                    role="Supervisora Comercial"
                    initials="PN"
                    imageSrc={imgPriscila}
                    description={
                        <>
                            Eu tinha muitas dificuldades em minha fala como clareza, dicação, falava muitos gerúndios e tinha muitos vícios de linguagem. Por causa disso, passei situações extremamente desconfortáveis e frustrantes ao longo de minha carreira. <span className="bg-[#DEFF00]/25 text-white px-1">Após o curso, eu transformei minha comunicação e minha vida profissional, fui promovida em meu trabalho</span> e atingi um cargo de liderança.
                        </>
                    }
                />

                {/* Card 3 */}
                <TestimonialCard
                    name="André Mello"
                    role="Coprodutor - Marketing Digital"
                    initials="AM"
                    imageSrc={imgAndre}
                    description={
                        <>
                            Entrei para o curso para <span className="bg-[#DEFF00]/25 text-white px-1">eliminar meus vícios de linguagem e conseguir me comunicar de maneira clara com as pessoas, dando impacto em minha fala</span>, sem ter prolixidade que era uma das minhas maiores dificuldades. O valor do investimento no curso foi irrisório, pois o conteúdo é absurdo, e hoje falar em público se tornou uma das minhas maiores tranquilidades.
                        </>
                    }
                />

                {/* Card 4 */}
                <TestimonialCard
                    name="Cleitton Macêdo"
                    role="Apresentador"
                    initials="CM"
                    imageSrc={imgCleitton}
                    description={
                        <>
                            Quando eu ia falar, sentia as palavras presas na garganta, e não conseguia sentir confiança em mim mesmo para ser um grande orador. <span className="bg-[#DEFF00]/25 text-white px-1">Consegui melhorar minha dicção, minha presença, minha persuasão, e como a comunicação faz parte da minha profissão, eu transformei minha carreira</span> não só na TV, mas até mesmo nas redes sociais.
                        </>
                    }
                />
            </div>
        </section>
    );
}

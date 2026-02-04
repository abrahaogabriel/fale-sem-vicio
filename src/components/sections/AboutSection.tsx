import imgGiovanniAbout from "../../assets/giovanni_about.png";

export function AboutSection() {
    return (
        <section className="relative w-full bg-black py-10 md:py-20 pl-[15px] xl:pl-[120px] pr-0 flex items-center overflow-hidden">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-[149px] items-center w-full">

                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-[30px] items-start text-white flex-shrink-0 w-full xl:w-[657px] pr-[15px] xl:pr-0">
                    {/* Title */}
                    <div className="font-sora font-medium text-[24px] xl:text-[40px] leading-tight">
                        <h1 className="text-[#DEFF00] mb-0">Conheça o seu mentor</h1>
                        <p className="text-white">Giovanni Begossi, o El Professor da Oratória</p>
                    </div>

                    {/* Description */}
                    <p className="font-sora font-normal text-[18px] xl:text-[22px] leading-[1.4] xl:leading-[30px] text-white">
                        <span className="font-bold text-[#DEFF00]">Bicampeão brasileiro de oratória</span>, palestrante internacional, advogado e TEDx Speaker e autor do best-seller Como Falar Bem e Ficar Rico - <span className="font-bold">Top #1</span> na Amazon em "Falar em Público" e do livro Como fazer amigos e influenciar pessoas de Dale Carnegie (versão atualizada e comentada). Com mais de <span className="font-bold text-[#DEFF00]">15 anos de experiência</span>, Giovanni já treinou desde empresários e atletas olímpicos até políticos, desembargadores, grandes empresas e também para corporações de elite, como a <span className="font-bold text-[#DEFF00]">SWAT de São Paulo (GATE) e o Exército Brasileiro (EsAO).</span> Hoje, lidera o maior perfil de comunicação e oratória da América Latina, com mais de 4 milhões de seguidores. Seu propósito é transformar a vida de cada vez mais pessoas por meio da comunicação.
                    </p>
                </div>

                {/* Right Column: Giovanni Image - Flush to the right edge */}
                <div className="relative flex-1 w-full xl:w-auto h-[400px] xl:h-[627px] overflow-hidden">
                    <img
                        src={imgGiovanniAbout}
                        alt="Giovanni Begossi"
                        className="w-full h-full object-cover object-left xl:object-center"
                    />
                </div>

            </div>
        </section>
    );
}

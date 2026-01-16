import imgGiovanniAbout from "../../assets/giovanni_about.png";

export function AboutSection() {
    return (
        <section className="relative w-full bg-black py-20 px-6 xl:px-[120px] flex items-center justify-center overflow-hidden">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-[149px] items-center w-full max-w-[1800px]">

                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-[30px] items-start text-white flex-1 max-w-[657px]">
                    {/* Title */}
                    <div className="font-sora font-medium text-[32px] xl:text-[40px] leading-tight">
                        <p className="text-[#DEFF00] mb-0">Giovanni Begossi</p>
                        <p className="text-white">O El Professor da Oratória</p>
                    </div>

                    {/* Description */}
                    <p className="font-sora font-normal text-[18px] xl:text-[22px] leading-[1.4] xl:leading-[30px] text-white">
                        <span className="font-bold text-[#DEFF00]">Bicampeão brasileiro de oratória</span>, palestrante internacional, advogado e TEDx Speaker e autor do best-seller Como Falar Bem e Ficar Rico - <span className="font-bold">Top #1</span> na Amazon em "Falar em Público" e do livro Como fazer amigos e influenciar pessoas de Dale Carnegie (versão atualizada e comentada). Com mais de <span className="font-bold text-[#DEFF00]">15 anos de experiência</span>, Giovanni já treinou desde empresários e atletas olímpicos até políticos, desembargadores, grandes empresas e também para corporações de elite, como a <span className="font-bold text-[#DEFF00]">SWAT de São Paulo (GATE) e o Exército Brasileiro (EsAO).</span> Hoje, lidera o maior perfil de comunicação e oratória da América Latina, com mais de 4 milhões de seguidores. Seu propósito é transformar a vida de cada vez mais pessoas por meio da comunicação.
                    </p>
                </div>

                {/* Right Column: Giovanni Image */}
                <div className="relative shrink-0 w-full xl:w-auto max-w-[600px] xl:max-w-none">
                    <div className="relative w-full xl:w-[600px] h-auto aspect-[1082/627] overflow-hidden">
                        <img
                            src={imgGiovanniAbout}
                            alt="Giovanni Begossi"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

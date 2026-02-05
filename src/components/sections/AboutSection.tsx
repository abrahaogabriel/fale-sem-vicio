import imgGiovanniAbout from "../../assets/giovanni_about.png";

export function AboutSection() {
    return (
        <section className="relative w-full bg-black py-10 md:py-20 pl-[15px] xl:pl-[120px] pr-0 flex items-center overflow-hidden">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-[149px] items-center w-full">

                {/* Left Column: Text Content */}
                <div className="flex flex-col gap-[30px] items-start text-white flex-shrink-0 w-full xl:w-[657px] pr-[15px] xl:pr-0">
                    {/* Title */}
                    <div className="font-sora font-medium text-[24px] xl:text-[40px] leading-tight">
                        <p className="text-white mb-2 opacity-80 text-[18px] xl:text-[24px]">Conheça o seu mentor</p>
                        <p className="text-[#DEFF00] mb-0 font-bold">Giovanni Begossi</p>
                        <p className="text-white text-[20px] xl:text-[32px]">"El Professor da Oratória"</p>
                    </div>

                    {/* Description */}
                    <p className="font-sora font-normal text-[18px] xl:text-[22px] leading-[1.4] xl:leading-[30px] text-white">
                        Mais conhecido como <span className="font-bold text-[#DEFF00]">El Professor da Oratória</span>, Giovanni Begossi é <span className="font-bold text-[#DEFF00]">bicampeão brasileiro de oratória</span>, advogado, palestrante internacional, TEDx Speaker e autor do best seller <span className="font-bold text-[#DEFF00]">COMO FALAR BEM E FICAR RICO</span>, o livro de oratória mais vendido da Amazon. Com mais de <span className="font-bold text-[#DEFF00]">15 anos de experiência</span> e criador do maior perfil de oratória da América Latina com mais de <span className="font-bold text-[#DEFF00]">4.5 milhões de seguidores</span> nas redes sociais, Giovanni treina a comunicação persuasiva de políticos, atletas campeões olímpicos, bilionários e grandes personalidades como Natalia Beauty, Sheila Mello e Cela, além de instituições renomadas como Falconi, Biogen, Johnson & Johnson e até mesmo da <span className="font-bold text-[#DEFF00]">SWAT de São Paulo (GATE), do BOPE e do Exército Brasileiro (EsAO).</span> Seu propósito é transformar a vida de cada vez mais pessoas por meio da comunicação.
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

import { Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import imgGiovanni from "../../assets/giovannisrc.png";
import imgLogosCartao from "../../assets/logos_cartao.svg";
import imgCheckYellow from "../../assets/check_yellow.svg";

// Image for the Price Box Logo (from public folder)
const PriceLogo = () => (
    <img
        src="logo-fale.png"
        alt="Fale sem vício"
        className="w-[200px] sm:w-[280px] h-auto"
    />
);

export function PriceSection() {
    return (
        <section id="preco" className="relative w-full bg-black py-10 md:py-20 px-[15px] xl:px-[120px] flex flex-col items-center justify-center overflow-hidden">
            {/* Title */}
            <motion.div
                className="w-full max-w-[1240px] text-center mb-[40px] md:mb-[80px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-[24px] md:text-[32px] font-sora font-normal text-white text-center leading-[1.2]">
                    Uma metodologia completa para você conquistar <span className="text-[#DEFF00] font-bold">espaço e respeito</span>
                </h2>
            </motion.div>

            {/* Content Grid: Left (Giovanni), Center (Price), Right (Bullets) */}
            <div className="flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-[60px] w-full max-w-[1900px]">

                {/* Left Column: Giovanni Testimonial */}
                {/* User feedback: margins and widths wrong, text should fit in 3 lines. */}
                {/* Removed max-w limitation to let it flow naturally, or increased slightly if needed. */}
                <motion.div
                    className="flex flex-col items-end gap-[20px] xl:gap-[30px] flex-1 w-full xl:w-auto text-right min-w-[300px]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    {/* Header: Name + Avatar */}
                    <div className="flex items-center gap-[12px] justify-end w-full">
                        <div className="flex flex-col items-end gap-[2px]">
                            {/* Name: Regular */}
                            <p className="text-white font-sora font-normal text-[16.7px] leading-tight">Giovanni Begossi</p>
                            {/* Role: Light */}
                            <p className="text-[#808080] font-sora font-light text-[15px] leading-tight">O El Professor da Oratória</p>
                        </div>
                        <div className="w-[59px] h-[59px] rounded-full overflow-hidden shrink-0 border border-white/10 relative">
                            {/* Masked image approach from Figma context */}
                            <img src={imgGiovanni} alt="Giovanni" className="w-full h-full object-cover scale-[1.5] translate-y-1" />
                        </div>
                    </div>
                    {/* Quote */}
                    {/* User feedback: fits in 3 lines. Quicksand Medium 20px. */}
                    <p className="text-white font-quicksand font-normal text-[18px] leading-tight w-full xl:max-w-[700px]">
                        “Eu criei o Fale sem Vício para corrigir um problema comum, silencioso e ignorado, que faz pessoas excepcionais não serem levadas a sério”
                    </p>
                </motion.div>

                {/* Center Column: Price Box */}
                <motion.div
                    className="relative shrink-0 w-full md:w-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="w-full md:min-w-[600px] bg-black bg-opacity-40 border border-[#DEFF00] rounded-[24px] md:rounded-[45px] px-[15px] py-[40px] md:px-[60px] md:py-[40px] flex flex-col items-center relative gap-[40px]"
                        style={{ background: 'rgba(222, 255, 0, 0.08)' }}
                    >
                        {/* Logo */}
                        <PriceLogo />

                        {/* Price Info */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <span className="text-white/50 font-sora text-[18px] md:text-[22px] line-through">De R$ 497,00</span>
                                <span className="text-white font-sora text-[20px] md:text-[24px]">por apenas 12x de</span>
                            </div>

                            {/* Huge Price Font */}
                            <div className="text-[#5AF43B] font-helvetica font-bold text-[56px] md:text-[80px] lg:text-[110px] leading-[0.9] tracking-tighter -my-2 whitespace-nowrap">
                                R$ 10,18
                            </div>
                            <span className="text-white font-sora text-[20px] md:text-[24px]">Ou R$ 97,00 à vista</span>
                        </div>

                        {/* CTA Button */}
                        <a href="https://pay.hub.la/DMMuAf1s8viuWmQd1I1P" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-4 group px-12 mt-4 cursor-pointer justify-center">
                            <span className="uppercase tracking-wide font-medium text-[14px] md:text-[20px] whitespace-nowrap">Quero falar sem vício</span>
                            <div className="shrink-0 transition-transform group-hover:translate-x-1 flex items-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.79714 15.5792C3.52566 15.5792 -1.33514e-05 12.0536 -1.33514e-05 7.78962C-1.33514e-05 3.52567 3.53319 0 7.80467 0C12.0686 0 15.5868 3.52567 15.5868 7.78962C15.5868 12.0536 12.0611 15.5792 7.79714 15.5792ZM7.79714 14.0273C11.255 14.0273 14.0198 11.2475 14.0198 7.78962C14.0198 4.33175 11.255 1.55943 7.80467 1.55943C4.34681 1.55943 1.56695 4.33175 1.55942 7.78962C1.55188 11.2475 4.33927 14.0273 7.79714 14.0273ZM11.6844 7.78962C11.6844 8.00056 11.6015 8.1663 11.4358 8.33203L8.88196 10.8482C8.75389 10.9688 8.60322 11.0366 8.42242 11.0366C8.06835 11.0366 7.81221 10.7653 7.81221 10.4113C7.81221 10.2229 7.88754 10.0647 8.00808 9.95173L8.92716 9.07785L9.77091 8.39983L8.22655 8.46763H4.55021C4.166 8.46763 3.8948 8.17383 3.8948 7.78962C3.8948 7.39788 4.166 7.11161 4.55021 7.11161H8.22655L9.76338 7.18694L8.91963 6.5014L8.00808 5.62751C7.89508 5.51451 7.81221 5.35631 7.81221 5.16797C7.81221 4.8139 8.06835 4.55022 8.42242 4.55022C8.60322 4.55022 8.75389 4.61049 8.88196 4.73103L11.4358 7.25474C11.6091 7.42048 11.6844 7.58622 11.6844 7.78962Z" fill="currentColor" />
                                </svg>
                            </div>
                        </a>

                        {/* Security Footer */}
                        <div className="flex flex-col items-center gap-4 w-full pt-2">
                            <div className="flex items-center gap-2 sm:gap-6 text-[#9CA3AF] text-sm whitespace-nowrap">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Lock size={16} className="text-[#DEFF00] sm:w-[20px] sm:h-[20px]" />
                                    <span className="text-[#808080] font-sora text-[14px] md:text-[20px]">Compra 100% segura</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <ShieldCheck size={16} className="text-[#DEFF00] sm:w-[20px] sm:h-[20px]" />
                                    <span className="text-[#808080] font-sora text-[14px] md:text-[20px]">Garantia de 7 dias</span>
                                </div>
                            </div>
                            {/* Card Logos */}
                            <img src={imgLogosCartao} alt="Formas de Pagamento" className="h-[24px] opacity-60 grayscale hover:grayscale-0 transition-all" />
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Bullets */}
                {/* User feedback: font weights wrong. Should be Medium (500). */}
                <motion.div
                    className="flex flex-col gap-[20px] flex-1 w-full xl:w-auto items-start min-w-[300px]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                >
                    {[
                        "Metodologia validada",
                        "6 Módulos com +25 Aulas",
                        "Resultados à partir do 1º dia",
                        "Conteúdo único e exclusivo"
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-[16px]"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        >
                            <img src={imgCheckYellow} alt="Check" className="w-[20px] h-[20px] shrink-0" />
                            {/* Font Sora Medium 20px #CCC */}
                            <p className="text-[#CCCCCC] font-sora font-normal text-[20px] leading-tight">{item}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            {/* --- BOTTOM DIVISOR --- */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1500px] h-[1px]"
                style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #DEFF00 50%, rgba(0,0,0,0) 100%)' }}
            />
        </section>
    );
}

import { Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import imgGiovanni from "../../assets/giovannisrc.png";
import imgLogosCartao from "../../assets/logos_cartao.svg";
import imgCheckYellow from "../../assets/check_yellow.svg";

// SVG for the Price Box Logo
const PriceLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="110" viewBox="0 0 280 110" fill="none" className="w-[200px] sm:w-[280px] h-auto text-[#DEFF00]">
        <path d="M120.236 100.912C120.595 100.912 120.845 101.132 120.845 101.489V101.903C120.845 103.001 121.342 103.527 122.537 103.527H130.929C132.924 103.527 133.311 103.142 133.311 101.517V100.114C133.311 98.4894 132.924 98.0764 130.929 98.0764H122.121C119.102 98.0764 117.717 96.7288 117.717 93.8652V91.3344C117.717 88.4708 119.102 87.1233 122.121 87.1233H131.926C135.196 87.1233 136.415 88.3064 136.415 91.4147V91.9922C136.415 92.3491 136.222 92.5697 135.806 92.5697H133.646C133.259 92.5697 133.037 92.3491 133.037 91.9922V91.6072C133.037 90.5083 132.536 89.9829 131.321 89.9829H123.566C121.6 89.9829 121.185 90.396 121.185 91.9922V93.1753C121.185 94.7997 121.6 95.2127 123.566 95.2127H132.375C135.394 95.2127 136.807 96.5603 136.807 99.4239V102.175C136.807 105.039 135.394 106.386 132.375 106.386H121.96C118.69 106.386 117.446 105.231 117.446 102.095V101.489C117.446 101.132 117.668 100.912 118.056 100.912H120.244H120.236Z" fill="currentColor" />
        <path d="M158.182 87.1273C158.541 87.1273 158.763 87.3198 158.763 87.7048V89.4093C158.763 89.7663 158.541 89.9869 158.182 89.9869H143.972V95.2168H155.994C156.353 95.2168 156.603 95.4093 156.603 95.7943V97.5269C156.603 97.8838 156.353 98.0764 155.994 98.0764H143.972V103.527H158.182C158.541 103.527 158.763 103.747 158.763 104.104V105.809C158.763 106.194 158.541 106.386 158.182 106.386H141.09C140.702 106.386 140.509 106.194 140.509 105.809V87.7008C140.509 87.3158 140.702 87.1233 141.09 87.1233H158.182V87.1273Z" fill="currentColor" />
        <path d="M167.487 87.1273C167.959 87.1273 168.177 87.2917 168.318 87.6487L174.854 103.198L181.418 87.6487C181.555 87.2917 181.777 87.1273 182.249 87.1273H186.653C187.041 87.1273 187.235 87.3198 187.235 87.7048V105.813C187.235 106.198 187.041 106.39 186.653 106.39H184.38C183.993 106.39 183.771 106.198 183.771 105.813V89.9869L176.957 105.865C176.82 106.222 176.598 106.386 176.125 106.386H173.465C172.964 106.386 172.771 106.222 172.633 105.865L165.791 89.9588V105.809C165.791 106.194 165.569 106.386 165.182 106.386H163.103C162.715 106.386 162.521 106.194 162.521 105.809V87.7008C162.521 87.3158 162.715 87.1233 163.103 87.1233H167.478L167.487 87.1273Z" fill="currentColor" />
        <path d="M206.983 106.39C206.51 106.39 206.316 106.226 206.151 105.869L198.118 87.7048C197.98 87.3759 198.089 87.1273 198.42 87.1273H200.996C201.468 87.1273 201.686 87.2917 201.828 87.6487L208.67 103.583L215.54 87.6487C215.678 87.2917 215.9 87.1273 216.372 87.1273H218.81C219.141 87.1273 219.283 87.3759 219.141 87.7048L211.052 105.869C210.914 106.226 210.721 106.39 210.22 106.39H206.978H206.983Z" fill="currentColor" />
        <path d="M224.292 85.2824C224.07 85.5311 223.767 85.7236 223.323 85.7236H221.717C221.386 85.7236 221.244 85.4228 221.438 85.1741L223.739 82.2303C224.018 81.9014 224.264 81.733 224.708 81.733H227.033C227.364 81.733 227.506 82.0618 227.255 82.3105L224.292 85.2824ZM225.289 105.813C225.289 106.198 225.067 106.39 224.68 106.39H222.407C222.02 106.39 221.826 106.198 221.826 105.813V87.7048C221.826 87.3198 222.02 87.1273 222.407 87.1273H224.68C225.067 87.1273 225.289 87.3198 225.289 87.7048V105.813Z" fill="currentColor" />
        <path d="M247.807 100.334C248.194 100.334 248.388 100.555 248.388 100.912V102.095C248.388 105.231 247.169 106.386 243.899 106.386H234.231C231.102 106.386 229.576 104.983 229.576 101.983V91.527C229.576 88.5551 231.098 87.1233 234.231 87.1233H243.899C247.169 87.1233 248.388 88.3064 248.388 91.4147V92.5978C248.388 92.9828 248.194 93.1753 247.807 93.1753H245.619C245.231 93.1753 245.009 92.9828 245.009 92.5978V91.6072C245.009 90.5083 244.509 89.9829 243.293 89.9829H235.842C233.541 89.9829 233.044 90.396 233.044 92.293V101.209C233.044 103.106 233.545 103.519 235.842 103.519H243.293C244.513 103.519 245.009 102.997 245.009 101.894V100.904C245.009 100.547 245.231 100.326 245.619 100.326H247.807V100.334Z" fill="currentColor" />
        <path d="M255.699 105.813C255.699 106.198 255.476 106.39 255.089 106.39H252.816C252.429 106.39 252.235 106.198 252.235 105.813V87.7048C252.235 87.3198 252.429 87.1273 252.816 87.1273H255.089C255.476 87.1273 255.699 87.3198 255.699 87.7048V105.813Z" fill="currentColor" />
        <path d="M279.77 101.987C279.77 104.987 278.301 106.39 275.144 106.39H264.644C261.516 106.39 259.99 104.987 259.99 101.987V91.531C259.99 88.5591 261.512 87.1273 264.644 87.1273H275.144C278.301 87.1273 279.77 88.5591 279.77 91.531V101.987ZM276.282 92.301C276.282 90.404 275.81 89.9909 273.513 89.9909H266.255C263.954 89.9909 263.457 90.404 263.457 92.301V101.217C263.457 103.114 263.958 103.527 266.255 103.527H273.513C275.814 103.527 276.282 103.114 276.282 101.217V92.301Z" fill="currentColor" />
        <path d="M130.118 78.372H117.382V0H156.599V19.4797H143.867V12.6496H130.118V39.4086H141.389V52.0582H130.118V78.372Z" fill="white" />
        <path d="M160.66 78.3761V0H199.878V78.3761H187.146V52.0662H173.396V78.3761H160.66ZM187.142 12.6536H173.392V39.4126H187.142V12.6536Z" fill="white" />
        <path d="M236.726 65.7225V78.3761H203.931V0H216.667V65.7225H236.726Z" fill="white" />
        <path d="M240.783 78.3761V0H280V19.4797H267.268V12.6496H253.519V39.4086H264.789V52.0582H253.519V65.7185H267.268V58.8883H280V78.368H240.783V78.3761Z" fill="white" />
        <path d="M97.5652 89.6099L103.055 85.7035L103.891 85.8118L107.342 110L99.9429 95.301L93.7343 99.7007L86.8233 86.638C86.7547 86.1687 86.8395 86.3292 87.1745 86.2851C87.9577 86.1848 88.6722 86.5498 89.4392 86.5257V83.6781L91.833 84.0511L92.0671 81.3078L93.5083 81.4362L94.4488 79.1742L97.5572 89.6059L97.5652 89.6099Z" fill="currentColor" />
        <path d="M82.0276 96.5122L81.8096 101.939L79.654 101.594C79.2867 101.321 79.541 101.297 79.5975 101.056C79.8518 100.03 80.6471 97.5069 81.1395 96.6526C81.4746 96.071 81.4221 96.3638 82.0236 96.5122H82.0276Z" fill="currentColor" />
        <path d="M82.3304 76.8761C82.3062 76.9082 81.7087 77.1729 81.5028 76.8761C81.2405 76.4951 79.2907 72.1034 79.4683 71.8989C80.0738 72.0192 81.3535 71.0406 81.7451 71.6502L82.3264 76.8721L82.3304 76.8761Z" fill="currentColor" />
        <path d="M82.7664 85.5832V86.2851L77.5185 86.9989C77.5993 86.4455 77.24 84.5725 77.894 84.4161L82.7664 85.5832Z" fill="currentColor" />
        <path d="M82.6493 87.7209L83.0126 88.3104C83.0086 88.892 80.0577 91.2863 79.545 91.9802L77.9989 90.2075L82.6493 87.7249V87.7209Z" fill="currentColor" />
        <path d="M84.9059 95.305L87.5136 99.9293L85.9393 100.719C85.6244 100.788 85.5518 100.575 85.4347 100.358C84.7928 99.1753 84.7807 96.9012 83.9774 95.6499L84.9059 95.305Z" fill="currentColor" />
        <path d="M87.5863 73.09C86.8072 73.9924 85.7051 76.7758 84.9745 77.4336C84.7121 77.6702 84.5748 77.602 84.2479 77.59L85.3136 72.6047C85.5921 72.1074 87.0454 73.2585 87.5863 73.09Z" fill="currentColor" />
        <path d="M38.0912 34.3351H27.8781V44.4821H38.0912V34.3351Z" fill="currentColor" />
        <path d="M55.1991 34.3351H44.986V44.4821H55.1991V34.3351Z" fill="currentColor" />
        <path d="M72.307 34.3351H62.094V44.4821H72.307V34.3351Z" fill="currentColor" />
        <path d="M84.3407 0.336894H15.8484C7.11283 0.336894 0 7.40365 0 16.0827V77.7143H47.7149L75.5728 100.13L71.9962 77.7143H79.6782L75.2983 74.201H67.8585L70.6398 91.6393L48.9703 74.201H3.53623V16.0827C3.53623 9.33679 9.0626 3.85022 15.8484 3.85022H84.3407C91.1306 3.85022 96.6529 9.3408 96.6529 16.0827V61.9685C96.6529 67.5433 95.8819 72.2638 90.735 73.7277L89.2898 77.4175C99.5877 75.4042 100.189 70.1983 100.189 61.9685V16.0827C100.189 7.39964 93.0763 0.336894 84.3407 0.336894Z" fill="currentColor" />
    </svg>
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
                        <div className="flex flex-col items-center gap-8">
                            <div className="text-center">
                                <span className="text-[#808080] font-sora text-[16px] opacity-60 line-through">De R$497,00</span>
                                <br />
                                <span className="text-white font-sora text-[20px]">por apenas 12x de</span>
                            </div>
                            {/* Huge Price Font */}
                            <div className="text-[#00B04F] font-helvetica font-bold text-[56px] md:text-[80px] lg:text-[110px] leading-[0.9] tracking-tighter -my-2 whitespace-nowrap">
                                R$ 10,18
                            </div>
                            <span className="text-white font-sora text-[20px]">ou apenas R$97,00 à vista</span>
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
                        "6 módulos com +25 aulas",
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
        </section>
    );
}

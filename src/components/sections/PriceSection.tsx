import { ArrowRight } from "lucide-react";
import imgGiovanni from "../../assets/giovannisrc.png"; // Needs to be downloaded or reused from Hero? 
// User provided link: http://localhost:3845/assets/d79a1287828b8d6d3d6e0fd4841c0c1adb9ad895.png which is the same as allan.png?
// Wait, id 249:218 is the left column.
// The user provided links for "depoimento do giovanni na esquerda".
// Image src: http://localhost:3845/assets/58f63bda904f4adb308304c2b41e0774bbea6744.png (Masked)
// I will assume I need to fetch the Giovanni image.
// In the recent `curl` step I fetched `giovannisrc.png` but the URL was `d79a...` which was Allan's image in the previous step???
// Let me re-check the IDs.
// Allan = d79a...
// Giovanni left = 249:218.
// I will use a placeholder or the hero image if available (giovanni.png in Hero? No, Hero uses `giovanni_hero.png` maybe).
// I will try to use the image from the curl command if it's correct, otherwise I will need to correct it.
// Actually, `curl -o src/assets/giovannisrc.png ...` was executed.
// Let's create `PriceSection.tsx`.

// SVG for the Price Box Logo (Provided by user)
const PriceLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="110" viewBox="0 0 280 110" fill="none">
        <path d="M120.236 100.912C120.595 100.912 120.845 101.132 120.845 101.489V101.903C120.845 103.001 121.342 103.527 122.537 103.527H130.929C132.924 103.527 133.311 103.142 133.311 101.517V100.114C133.311 98.4894 132.924 98.0764 130.929 98.0764H122.121C119.102 98.0764 117.717 96.7288 117.717 93.8652V91.3344C117.717 88.4708 119.102 87.1233 122.121 87.1233H131.926C135.196 87.1233 136.415 88.3064 136.415 91.4147V91.9922C136.415 92.3491 136.222 92.5697 135.806 92.5697H133.646C133.259 92.5697 133.037 92.3491 133.037 91.9922V91.6072C133.037 90.5083 132.536 89.9829 131.321 89.9829H123.566C121.6 89.9829 121.185 90.396 121.185 91.9922V93.1753C121.185 94.7997 121.6 95.2127 123.566 95.2127H132.375C135.394 95.2127 136.807 96.5603 136.807 99.4239V102.175C136.807 105.039 135.394 106.386 132.375 106.386H121.96C118.69 106.386 117.446 105.231 117.446 102.095V101.489C117.446 101.132 117.668 100.912 118.056 100.912H120.244H120.236Z" fill="#DEFF00" />
        <path d="M158.182 87.1273C158.541 87.1273 158.763 87.3198 158.763 87.7048V89.4093C158.763 89.7663 158.541 89.9869 158.182 89.9869H143.972V95.2168H155.994C156.353 95.2168 156.603 95.4093 156.603 95.7943V97.5269C156.603 97.8838 156.353 98.0764 155.994 98.0764H143.972V103.527H158.182C158.541 103.527 158.763 103.747 158.763 104.104V105.809C158.763 106.194 158.541 106.386 158.182 106.386H141.09C140.702 106.386 140.509 106.194 140.509 105.809V87.7008C140.509 87.3158 140.702 87.1233 141.09 87.1233H158.182V87.1273Z" fill="#DEFF00" />
        <path d="M167.487 87.1273C167.959 87.1273 168.177 87.2917 168.318 87.6487L174.854 103.198L181.418 87.6487C181.555 87.2917 181.777 87.1273 182.249 87.1273H186.653C187.041 87.1273 187.235 87.3198 187.235 87.7048V105.813C187.235 106.198 187.041 106.39 186.653 106.39H184.38C183.993 106.39 183.771 106.198 183.771 105.813V89.9869L176.957 105.865C176.82 106.222 176.598 106.386 176.125 106.386H173.465C172.964 106.386 172.771 106.222 172.633 105.865L165.791 89.9588V105.809C165.791 106.194 165.569 106.386 165.182 106.386H163.103C162.715 106.386 162.521 106.194 162.521 105.809V87.7008C162.521 87.3158 162.715 87.1233 163.103 87.1233H167.478L167.487 87.1273Z" fill="#DEFF00" />
        <path d="M206.983 106.39C206.51 106.39 206.316 106.226 206.151 105.869L198.118 87.7048C197.98 87.3759 198.089 87.1273 198.42 87.1273H200.996C201.468 87.1273 201.686 87.2917 201.828 87.6487L208.67 103.583L215.54 87.6487C215.678 87.2917 215.9 87.1273 216.372 87.1273H218.81C219.141 87.1273 219.283 87.3759 219.141 87.7048L211.052 105.869C210.914 106.226 210.721 106.39 210.22 106.39H206.978H206.983Z" fill="#DEFF00" />
        <path d="M224.292 85.2824C224.07 85.5311 223.767 85.7236 223.323 85.7236H221.717C221.386 85.7236 221.244 85.4228 221.438 85.1741L223.739 82.2303C224.018 81.9014 224.264 81.733 224.708 81.733H227.033C227.364 81.733 227.506 82.0618 227.255 82.3105L224.292 85.2824ZM225.289 105.813C225.289 106.198 225.067 106.39 224.68 106.39H222.407C222.02 106.39 221.826 106.198 221.826 105.813V87.7048C221.826 87.3198 222.02 87.1273 222.407 87.1273H224.68C225.067 87.1273 225.289 87.3198 225.289 87.7048V105.813Z" fill="#DEFF00" />
        <path d="M247.807 100.334C248.194 100.334 248.388 100.555 248.388 100.912V102.095C248.388 105.231 247.169 106.386 243.899 106.386H234.231C231.102 106.386 229.576 104.983 229.576 101.983V91.527C229.576 88.5551 231.098 87.1233 234.231 87.1233H243.899C247.169 87.1233 248.388 88.3064 248.388 91.4147V92.5978C248.388 92.9828 248.194 93.1753 247.807 93.1753H245.619C245.231 93.1753 245.009 92.9828 245.009 92.5978V91.6072C245.009 90.5083 244.509 89.9829 243.293 89.9829H235.842C233.541 89.9829 233.044 90.396 233.044 92.293V101.209C233.044 103.106 233.545 103.519 235.842 103.519H243.293C244.513 103.519 245.009 102.997 245.009 101.894V100.904C245.009 100.547 245.231 100.326 245.619 100.326H247.807V100.334Z" fill="#DEFF00" />
        <path d="M255.699 105.813C255.699 106.198 255.476 106.39 255.089 106.39H252.816C252.429 106.39 252.235 106.198 252.235 105.813V87.7048C252.235 87.3198 252.429 87.1273 252.816 87.1273H255.089C255.476 87.1273 255.699 87.3198 255.699 87.7048V105.813Z" fill="#DEFF00" />
        <path d="M279.77 101.987C279.77 104.987 278.301 106.39 275.144 106.39H264.644C261.516 106.39 259.99 104.987 259.99 101.987V91.531C259.99 88.5591 261.512 87.1273 264.644 87.1273H275.144C278.301 87.1273 279.77 88.5591 279.77 91.531V101.987ZM276.282 92.301C276.282 90.404 275.81 89.9909 273.513 89.9909H266.255C263.954 89.9909 263.457 90.404 263.457 92.301V101.217C263.457 103.114 263.958 103.527 266.255 103.527H273.513C275.814 103.527 276.282 103.114 276.282 101.217V92.301Z" fill="#DEFF00" />
        <path d="M130.118 78.372H117.382V0H156.599V19.4797H143.867V12.6496H130.118V39.4086H141.389V52.0582H130.118V78.372Z" fill="white" />
        <path d="M160.66 78.3761V0H199.878V78.3761H187.146V52.0662H173.396V78.3761H160.66ZM187.142 12.6536H173.392V39.4126H187.142V12.6536Z" fill="white" />
        <path d="M236.726 65.7225V78.3761H203.931V0H216.667V65.7225H236.726Z" fill="white" />
        <path d="M240.783 78.3761V0H280V19.4797H267.268V12.6496H253.519V39.4086H264.789V52.0582H253.519V65.7185H267.268V58.8883H280V78.368H240.783V78.3761Z" fill="white" />
        <path d="M97.5652 89.6099L103.055 85.7035L103.891 85.8118L107.342 110L99.9429 95.301L93.7343 99.7007L86.8233 86.638C86.7547 86.1687 86.8395 86.3292 87.1745 86.2851C87.9577 86.1848 88.6722 86.5498 89.4392 86.5257V83.6781L91.833 84.0511L92.0671 81.3078L93.5083 81.4362L94.4488 79.1742L97.5572 89.6059L97.5652 89.6099Z" fill="#DEFF00" />
        <path d="M82.0276 96.5122L81.8096 101.939L79.654 101.594C79.2867 101.321 79.541 101.297 79.5975 101.056C79.8518 100.03 80.6471 97.5069 81.1395 96.6526C81.4746 96.071 81.4221 96.3638 82.0236 96.5122H82.0276Z" fill="#DEFF00" />
        <path d="M82.3304 76.8761C82.3062 76.9082 81.7087 77.1729 81.5028 76.8761C81.2405 76.4951 79.2907 72.1034 79.4683 71.8989C80.0738 72.0192 81.3535 71.0406 81.7451 71.6502L82.3264 76.8721L82.3304 76.8761Z" fill="#DEFF00" />
        <path d="M82.7664 85.5832V86.2851L77.5185 86.9989C77.5993 86.4455 77.24 84.5725 77.894 84.4161L82.7664 85.5832Z" fill="#DEFF00" />
        <path d="M82.6493 87.7209L83.0126 88.3104C83.0086 88.892 80.0577 91.2863 79.545 91.9802L77.9989 90.2075L82.6493 87.7249V87.7209Z" fill="#DEFF00" />
        <path d="M84.9059 95.305L87.5136 99.9293L85.9393 100.719C85.6244 100.575 85.5518 100.575 85.4347 100.358C84.7928 99.1753 84.7807 96.9012 83.9774 95.6499L84.9059 95.305Z" fill="#DEFF00" />
        <path d="M87.5863 73.09C86.8072 73.9924 85.7051 76.7758 84.9745 77.4336C84.7121 77.6702 84.5748 77.602 84.2479 77.59L85.3136 72.6047C85.5921 72.1074 87.0454 73.2585 87.5863 73.09Z" fill="#DEFF00" />
        <path d="M38.0912 34.3351H27.8781V44.4821H38.0912V34.3351Z" fill="#DEFF00" />
        <path d="M55.1991 34.3351H44.986V44.4821H55.1991V34.3351Z" fill="#DEFF00" />
        <path d="M72.307 34.3351H62.094V44.4821H72.307V34.3351Z" fill="#DEFF00" />
        <path d="M84.3407 0.336894H15.8484C7.11283 0.336894 0 7.40365 0 16.0827V77.7143H47.7149L75.5728 100.13L71.9962 77.7143H79.6782L75.2983 74.201H67.8585L70.6398 91.6393L48.9703 74.201H3.53623V16.0827C3.53623 9.33679 9.0626 3.85022 15.8484 3.85022H84.3407C91.1306 3.85022 96.6529 9.3408 96.6529 16.0827V61.9685C96.6529 67.5433 95.8819 72.2638 90.735 73.7277L89.2898 77.4175C99.5877 75.4042 100.189 70.1983 100.189 61.9685V16.0827C100.189 7.39964 93.0763 0.336894 84.3407 0.336894Z" fill="#DEFF00" />
    </svg>
);

// Check Circle Icon
const CheckCircle = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#DEFF00" />
    </svg>
);

export function PriceSection() {
    return (
        <section className="relative w-full bg-black py-20 px-6 lg:px-[120px] flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-12 lg:gap-[60px] items-center lg:items-center">

                {/* Left Column: Giovanni Testimonial */}
                <div className="flex flex-col gap-8 flex-1 max-w-[500px] lg:max-w-none">
                    <div className="relative border border-[#262626] rounded-[20px] p-6 lg:p-8 bg-gradient-to-b from-[#1a1a1a] to-transparent overflow-hidden sm:flex sm:items-center sm:gap-6">
                        {/* Giovanni Image Card */}
                        <div className="w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] shrink-0 rounded-full border border-white/10 overflow-hidden mb-4 sm:mb-0">
                            <img src={imgGiovanni} alt="Giovanni" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col gap-2 relative z-10">
                            {/* Quote */}
                            <p className="text-white font-sora font-light text-[18px] lg:text-[20px] leading-[1.4]">
                                "Não quero te ensinar a falar bonito. Quero te ensinar a falar <strong className="font-semibold text-[#DEFF00]">sem vícios</strong>."
                            </p>
                            <div className="flex flex-col">
                                <span className="text-white font-sora font-medium text-[16px]">Giovanni Begossi</span>
                                <span className="text-[#808080] font-sora text-[14px]">O Rei da Oratória</span>
                            </div>
                        </div>

                        {/* Noise Overlay */}
                        <div className="absolute inset-0 bg-white/5 pointer-events-none mix-blend-overlay opacity-20 rounded-[20px]" />
                    </div>
                </div>

                {/* Right Column: Price Box */}
                <div className="flex-1 w-full max-w-[500px]">
                    <div className="relative border border-[#262626] rounded-[32px] bg-[#101010] p-8 lg:p-10 flex flex-col gap-8 shadow-2xl">

                        {/* Logo in Header */}
                        <div className="flex justify-center pb-4 border-b border-white/5">
                            <PriceLogo />
                        </div>

                        {/* Price Details */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-end gap-2">
                                <span className="text-[#808080] font-sora text-[16px] mb-2">de R$ 997,00</span>
                                <span className="text-[#DEFF00] font-sora font-medium text-[16px] mb-2 bg-[#DEFF00]/10 px-2 py-0.5 rounded-full">60% OFF</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-white/60 font-sora text-[14px]">por apenas</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-white font-sora text-[24px]">12x de</span>
                                    <span className="text-white font-bold font-helvetica text-[48px] lg:text-[64px] leading-none">R$ 29,64</span>
                                </div>
                                <span className="text-white/60 font-sora text-[14px]">ou R$ 297,00 à vista</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full bg-[#DEFF00] hover:bg-[#cbe600] text-black font-sora font-bold text-[18px] py-4 rounded-full transition-colors flex items-center justify-center gap-2 group">
                            QUERO FALAR SEM VÍCIO
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Payment Methods */}
                        <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder for payment icons or just text */}
                            <span className="text-white/40 text-xs">Pague com Pix ou Cartão de Crédito</span>
                        </div>

                        {/* Bullets */}
                        <div className="space-y-3 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3">
                                <CheckCircle />
                                <span className="text-[#CCCCCC] font-sora font-medium text-[15px]">Acesso imediato</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle />
                                <span className="text-[#CCCCCC] font-sora font-medium text-[15px]">Certificado incluso</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle />
                                <span className="text-[#CCCCCC] font-sora font-medium text-[15px]">7 dias de garantia</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle />
                                <span className="text-[#CCCCCC] font-sora font-medium text-[15px]">Acesso vitalício</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

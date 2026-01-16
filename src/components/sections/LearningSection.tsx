import { CentralLogo } from "../ui/CentralLogo";
import { PulseNode } from "../ui/PulseNode";
import { LearningCard } from "../ui/LearningCard";
import { CircuitLine } from "../ui/CircuitLine";

// Paths connecting Center Logo area to the 4 Cards
// Adjust coordinates based on relative position in a 1200x800 container or similar. 
// Assuming Center is around (600, 400).
// Card 1 (Top Left): Target ~ (200, 100)
// Card 2 (Bottom Left): Target ~ (200, 700)
// Card 3 (Top Right): Target ~ (1000, 100)
// Card 4 (Bottom Right): Target ~ (1000, 700)

// Let's approximate SVG paths relative to a container. 
// Ideally, we'd use exact coordinates from Figma, but responsive is better.
// We can use a centralized SVG overlay for lines.

export function LearningSection() {
    return (
        <section className="relative w-full bg-black py-20 px-6 md:px-[60px] lg:px-[120px] flex flex-col items-center overflow-hidden">

            {/* Header */}
            <div className="w-full flex flex-col items-center gap-4 mb-20 relative z-10">
                <h2 className="text-[32px] md:text-[40px] leading-[1.2] text-center font-sora">
                    <span className="text-white font-normal">O que você vai aprender com o </span>
                    <span className="text-brand-lime font-bold">Fale Sem Vício</span>
                </h2>
                <div className="bg-brand-lime/10 border border-brand-lime rounded-[12px] px-[30px] py-[15px]">
                    <p className="text-white text-lg md:text-[22px] text-center font-sora">
                        Sem precisar falar de forma robótica, apenas dominando suas próprias falas!
                    </p>
                </div>
            </div>

            {/* Main Content Area - Radial Layout */}
            <div className="relative w-full max-w-full md:max-w-[1800px] flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-y-16 md:gap-x-12 lg:gap-x-32 items-center justify-center">

                {/* --- SVG LINES LAYER (Desktop Only) --- */}
                <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 1800 1000">
                        {/* Top Left */}
                        <CircuitLine pathD="M 900 500 L 600 500 L 600 250 H 130" delay={0} />
                        {/* Bottom Left */}
                        <CircuitLine pathD="M 900 500 L 600 500 L 600 750 H 130" delay={1} />
                        {/* Top Right */}
                        <CircuitLine pathD="M 900 500 L 1200 500 L 1200 250 H 1670" delay={2} />
                        {/* Bottom Right */}
                        <CircuitLine pathD="M 900 500 L 1200 500 L 1200 750 H 1670" delay={3} />
                    </svg>
                </div>

                {/* --- LEFT COL (Cards) --- */}
                <div className="flex flex-col gap-16 md:gap-[150px] justify-center items-end h-full w-full pr-8">
                    {/* Top Left Card */}
                    <div className="relative flex items-center z-20">
                        <div className="relative z-30 w-full">
                            <LearningCard
                                title="Vícios de linguagem"
                                description="Você identifica e elimina os vícios que entram no meio da sua fala, quebram o raciocínio e enfraquecem sua autoridade, mesmo quando você domina o assunto."
                                delay={0.2}
                            />
                        </div>
                        {/* Connection Pulse Endpoint */}
                        <div className="hidden md:block absolute -right-[43px] top-1/2 -translate-y-1/2 z-10 scale-75 lg:scale-100">
                            <PulseNode />
                        </div>
                    </div>

                    {/* Bottom Left Card */}
                    <div className="relative flex items-center z-20">
                        <div className="relative z-30 w-full">
                            <LearningCard
                                title="Dicção"
                                description="Você corrige problemas de articulação que fazem sua fala soar confusa, imprecisa ou difícil de acompanhar, mesmo quando a ideia é simples."
                                delay={0.4}
                            />
                        </div>
                        <div className="hidden md:block absolute -right-[43px] top-1/2 -translate-y-1/2 z-10 scale-75 lg:scale-100">
                            <PulseNode />
                        </div>
                    </div>
                </div>

                {/* --- CENTER COL (Logo) --- */}
                <div className="flex items-center justify-center p-8 z-30 h-full">
                    <div className="w-[300px] md:w-[392px] h-auto">
                        <CentralLogo />
                    </div>
                </div>

                {/* --- RIGHT COL (Cards) --- */}
                <div className="flex flex-col gap-16 md:gap-[150px] justify-center items-start h-full w-full pl-8">
                    {/* Top Right Card */}
                    <div className="relative flex items-center z-20">
                        <div className="hidden md:block absolute -left-[43px] top-1/2 -translate-y-1/2 z-10 scale-75 lg:scale-100">
                            <PulseNode />
                        </div>
                        <div className="relative z-30 w-full">
                            <LearningCard
                                title="Prolixidade"
                                description="Você aprende a organizar suas ideias para falar com clareza e objetividade, sem dar voltas desnecessárias que confundem a audiência."
                                delay={0.6}
                            />
                        </div>
                    </div>

                    {/* Bottom Right Card */}
                    <div className="relative flex items-center z-20">
                        <div className="hidden md:block absolute -left-[43px] top-1/2 -translate-y-1/2 z-10 scale-75 lg:scale-100">
                            <PulseNode />
                        </div>
                        <div className="relative z-30 w-full">
                            <LearningCard
                                title="Vocabulário"
                                description="Você ajusta o uso das palavras, evitando jargões, estrangeirismos e termos desnecessários que atrapalham a clareza e afastam quem te escuta."
                                delay={0.8}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

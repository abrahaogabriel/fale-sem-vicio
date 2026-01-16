
interface TestimonialCardProps {
    name: string;
    role: string;
    description: React.ReactNode;
    initials: string;
    imageSrc?: string;
}

export function TestimonialCard({ name, role, description, initials, imageSrc }: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-[17px] w-full max-w-[430px] h-full">
            {/* Header: Avatar + Info */}
            <div className="flex items-center gap-[11px] shrink-0">
                {/* Avatar */}
                <div className="w-[58px] h-[58px] rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 shrink-0 overflow-hidden relative">
                    {imageSrc ? (
                        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-white/40 font-sora font-semibold text-lg">{initials}</span>
                    )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-[1px]">
                    <h3 className="text-white text-[16.7px] font-sora font-normal leading-tight">
                        {name}
                    </h3>
                    <p className="text-[#808080] text-[15px] font-sora font-light leading-tight">
                        {role}
                    </p>
                </div>
            </div>

            {/* Card Body */}
            <div className="relative border border-[#262626] rounded-[16.7px] p-[33px] bg-gradient-to-b from-[#1a1a1a] to-transparent flex flex-col items-start gap-6 min-h-[280px] h-full">
                {/* Quote Icon - User provided SVG, rotated 180deg per design */}
                <div className="rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="34" viewBox="0 0 40 34" fill="none">
                        <path d="M40 33.3774L40 16.6887L28.8742 16.6887C28.8742 10.5556 33.8613 5.56287 40 5.56287L40 -4.57764e-05C30.7976 -4.65809e-05 23.3113 7.48625 23.3113 16.6887L23.3113 33.3774L40 33.3774Z" fill="#DEFF00" />
                        <path d="M16.6887 33.3774L16.6887 16.6887L5.56291 16.6887C5.56291 10.5556 10.5501 5.56287 16.6887 5.56287L16.6887 -4.78143e-05C7.48629 -4.86188e-05 -1.55122e-06 7.48624 -2.35572e-06 16.6887L-3.8147e-06 33.3774L16.6887 33.3774Z" fill="#DEFF00" />
                    </svg>
                </div>

                {/* Quote Text */}
                <div className="relative z-10 flex-1">
                    <p className="text-white font-sora font-normal text-[15px] leading-[1.5]">
                        {description}
                    </p>
                </div>

                {/* Texture/Noise overlay approximation */}
                <div className="absolute inset-0 bg-white/5 pointer-events-none mix-blend-overlay opacity-20 rounded-[16.7px]" />
            </div>
        </div>
    );
}

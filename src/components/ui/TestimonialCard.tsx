import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    description: React.ReactNode;
    initials: string;
}

export function TestimonialCard({ name, role, description, initials }: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-[17px] w-full max-w-[430px]">
            {/* Header: Avatar + Info */}
            <div className="flex items-center gap-[11px]">
                {/* Avatar Placeholder */}
                <div className="w-[58px] h-[58px] rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 shrink-0 overflow-hidden">
                    {/* Ideally this would be the photo, using initials as fallback */}
                    <span className="text-white/40 font-sora font-semibold text-lg">{initials}</span>
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
            <div className="relative border border-[#262626] rounded-[16.7px] p-[33px] bg-gradient-to-b from-[#1a1a1a] to-transparent flex flex-col items-start gap-6">
                {/* Quote Icon */}
                <div className="rotate-180 text-white/20">
                    <Quote size={40} fill="currentColor" strokeWidth={0} />
                </div>

                {/* Quote Text */}
                <div className="relative z-10">
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

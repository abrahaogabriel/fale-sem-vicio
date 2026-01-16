import { Star } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    description: React.ReactNode;
    initials: string;
}

export function TestimonialCard({ name, description, initials }: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-6 p-6 md:p-8 bg-[#151515] border border-white/5 rounded-[24px] w-full max-w-[430px]">
            {/* Header: Avatar + Stars */}
            <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-[58px] h-[58px] rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 shadow-inner">
                    <span className="text-white/60 font-sora font-semibold text-xl">{initials}</span>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-white text-[16px] md:text-[18px] font-sora font-normal leading-tight">
                        {name}
                    </h3>
                    {/* Stars */}
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={14} className="fill-[#DEFF00] text-[#DEFF00]" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="relative">
                <p className="text-white/80 font-sora font-light text-[15px] leading-[1.6]">
                    {description}
                </p>
            </div>
        </div>
    );
}

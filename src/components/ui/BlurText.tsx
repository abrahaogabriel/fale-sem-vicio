import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from: any, steps: any[]) => {
    const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

    const keyframes: any = {};
    keys.forEach(k => {
        keyframes[k] = [from[k], ...steps.map(s => s[k])];
    });
    return keyframes;
};

interface TextSegment {
    text: string;
    className?: string;
}

interface BlurTextProps {
    text?: string | TextSegment[];
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: any;
    animationTo?: any[];
    easing?: any;
    onAnimationComplete?: () => void;
    stepDuration?: number;
}

const BlurText = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words',
    direction = 'top',
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = [0, 0, 0, 0],
    onAnimationComplete,
    stepDuration = 0.35
}: BlurTextProps) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);

    const segments = useMemo(() => {
        if (typeof text === 'string') return [{ text, className: '' }];
        return text;
    }, [text]);

    const elements = useMemo(() => {
        const allElements: { char: string; className: string }[] = [];
        segments.forEach(segment => {
            const parts = animateBy === 'words' ? segment.text.split(' ') : segment.text.split('');
            parts.forEach((part) => {
                allElements.push({
                    char: part,
                    className: segment.className || ''
                });
                // Add space if it's words and not the last word of the total text
                // Actually, let's just make it simpler: split the whole text but keep track of style.
            });
        });

        // Let's try a different approach: Flat list of words with their respective classes
        const flatWords: { word: string; className: string }[] = [];
        segments.forEach(seg => {
            const words = seg.text.split(' ');
            words.forEach((w, i) => {
                if (w === '' && i > 0) return; // avoid double spaces from split
                flatWords.push({ word: w, className: seg.className || '' });
            });
        });
        return flatWords;
    }, [segments, animateBy]);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current as Element);
                }
            },
            { threshold, rootMargin }
        );
        if (ref.current) {
            observer.observe(ref.current as Element);
        }
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const defaultFrom = useMemo(
        () =>
            direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
        [direction]
    );

    const defaultTo = useMemo(
        () => [
            {
                filter: 'blur(5px)',
                opacity: 0.5,
                y: direction === 'top' ? 5 : -5
            },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
        ],
        [direction]
    );

    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;

    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

    return (
        <p ref={ref} className={`${className} flex flex-wrap`}>
            {elements.map((el, index) => {
                const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

                return (
                    <motion.span
                        className={`inline-block will-change-[transform,filter,opacity] ${el.className}`}
                        key={index}
                        initial={fromSnapshot}
                        animate={inView ? animateKeyframes : fromSnapshot}
                        transition={{
                            duration: totalDuration,
                            times,
                            delay: (index * delay) / 1000,
                            ease: easing
                        }}
                        onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
                    >
                        {el.word === '' ? '\u00A0' : el.word}
                        {index < elements.length - 1 && '\u00A0'}
                    </motion.span>
                );
            })}
        </p>
    );
};

export default BlurText;

'use client';

import { motion, AnimatePresence } from 'motion/react';
import React, { useEffect, useState } from 'react';

export const PokemonLoader = () => {
	const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("");
    const fullText = "A wild FRONTEND DEV appeared!";

	useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Typewriter effect
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 50);

		const timer = setTimeout(() => {
			setIsLoading(false);
            document.body.style.overflow = '';
		}, 3000);

		return () => {
            clearTimeout(timer);
            clearInterval(interval);
            document.body.style.overflow = '';
        };
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1, y: "0%" }}
					exit={{ y: "-100%" }}
					transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
					className="fixed inset-0 z-100 bg-ink-900 flex flex-col items-center justify-center"
                    style={{ fontFamily: 'var(--font-press-start), monospace' }}
				>
                    {/* CSS Pokeball */}
                    <div className="relative w-24 h-24 mb-16 animate-bounce" style={{ animationDuration: '0.8s' }}>
                        {/* Top Red Half */}
                        <div className="absolute top-0 w-full h-[50%] bg-[#ee1515] rounded-t-full border-[6px] border-black" />
                        {/* Bottom White Half */}
                        <div className="absolute bottom-0 w-full h-[50%] bg-[#f0f0f0] rounded-b-full border-[6px] border-t-0 border-black" />
                        {/* Center Belt */}
                        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-black -translate-y-1/2" />
                        {/* Center Button */}
                        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white border-[6px] border-black rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                        </div>
                    </div>

                    {/* Dialog Box */}
                    <div className="w-[90%] max-w-2xl border-[6px] border-black bg-white p-6 md:p-10 rounded-md relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        {/* Inner detail line */}
                        <div className="absolute inset-1 border-4 border-black/10 rounded-sm pointer-events-none" />
                        <p className="text-black text-sm md:text-xl leading-relaxed min-h-12 tracking-wider">
                            {text}
                            <span className="animate-pulse">_</span>
                        </p>
                    </div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

"use client";

import { motion } from "motion/react";
import React, { useRef, useState } from "react";
import { useLenis } from "lenis/react";

const navItems = [
	{ label: "Home", target: "#home" },
	{ label: "About", target: "#about" },
	{ label: "Journey", target: "#experience" },
	{ label: "Work", target: "#projects" },
	{ label: "Contact", target: "#contact" },
];

const MagneticLink = ({
	label,
	target,
	onClick,
}: {
	label: string;
	target: string;
	onClick: (t: string) => void;
}) => {
	const ref = useRef<HTMLButtonElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!ref.current) return;
		const { clientX, clientY } = e;
		const { left, top, width, height } = ref.current.getBoundingClientRect();

		const x = (clientX - (left + width / 2)) * 0.3;
		const y = (clientY - (top + height / 2)) * 0.3;

		setPosition({ x, y });
	};

	const handleMouseLeave = () => {
		setPosition({ x: 0, y: 0 });
	};

	return (
		<motion.button
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onClick={() => onClick(target)}
			animate={{ x: position.x, y: position.y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
			className="px-3 py-2 md:px-6 md:py-3 rounded-full font-koulen text-xs md:text-base tracking-widest text-main-white hover:text-accent-orange hover:bg-white/5 transition-colors duration-300 relative group"
		>
			<span className="relative z-10">{label}</span>
		</motion.button>
	);
};

export const FloatingNav = () => {
	const lenis = useLenis();

	const handleScroll = (target: string) => {
		if (lenis) {
			lenis.scrollTo(target, {
				offset: 0,
				duration: 1.5,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			});
		} else {
			document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<motion.div
			initial={{ y: 100, opacity: 0, x: "-50%" }}
			animate={{ y: 0, opacity: 1, x: "-50%" }}
			transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
			className="fixed bottom-6 md:bottom-8 left-1/2 z-100 bg-ink-900/60 backdrop-blur-xl border border-ink-700 p-1 md:p-2 rounded-full shadow-2xl flex items-center gap-0 md:gap-1"
		>
			{navItems.map((item) => (
				<MagneticLink
					key={item.label}
					label={item.label}
					target={item.target}
					onClick={handleScroll}
				/>
			))}
		</motion.div>
	);
};

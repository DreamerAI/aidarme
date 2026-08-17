"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const TitleReveal = () => {
	const ref = useRef<HTMLHeadingElement>(null);
	const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
	const { t, language } = useLanguage();
	const isRussian = language === "ru";

	return (
		<h2
			ref={ref}
			className={`max-w-[92vw] font-pressStart2P text-center leading-none tracking-tighter mb-8 text-ink-900 flex justify-center ${isRussian ? "w-full flex-col items-center gap-y-[0.08em] text-[clamp(2.4rem,12vw,6rem)] sm:text-[clamp(4rem,16vw,6rem)]" : "flex-wrap gap-x-[0.2em] text-[clamp(3rem,14vw,6rem)] sm:text-[clamp(4rem,16vw,6rem)]"}`}
		>
			{(t("contacts.getInTouch") as string[]).map((word, i) => (
				<span key={`${word}-${i}`} className="overflow-hidden inline-block">
					<motion.span
						className="inline-block font-press-start"
						initial={{ y: "110%" }}
						animate={inView ? { y: "0%" } : { y: "110%" }}
						transition={{
							duration: 1.0,
							delay: i * 0.15,
							ease: [0.76, 0, 0.24, 1],
						}}
					>
						{word}
					</motion.span>
				</span>
			))}
		</h2>
	);
};

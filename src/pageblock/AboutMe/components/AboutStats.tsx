"use client";

import { motion } from "motion/react";
import { STATS } from "@/data/about";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedNumber } from "./AnimatedNumber";
import { StatBlock } from "./StatBlock";

const InfinityIcon = ({ inView }: { inView: boolean }) => (
	<motion.svg
		className="w-10 h-5.5 text-ink-900"
		viewBox="0 0 40 22"
		fill="none"
		stroke="currentColor"
		strokeWidth="2.5"
		strokeLinecap="round"
		initial={{ pathLength: 0 }}
		animate={{ pathLength: inView ? 1 : 0 }}
		transition={{ duration: 2.5, ease: "easeInOut" }}
		aria-hidden="true"
	>
		<motion.path d="M20 11c-3-5-7-8-10-8a7 7 0 1 0 0 16c3 0 7-3 10-8Zm0 0c3 5 7 8 10 8a7 7 0 1 0 0-16c-3 0-7 3-10 8Z" />
	</motion.svg>
);

type Props = {
	statsRef: (node?: Element | null) => void;
	statsInView: boolean;
	bodyInView: boolean;
};

export const AboutStats = ({ statsRef, statsInView, bodyInView }: Props) => {
	const { t } = useLanguage();

	return (
		<>
			<div
				ref={statsRef}
				className="hidden lg:flex flex-col items-start gap-6 pl-8 xl:pl-10 border-l border-paper-300 min-w-40"
			>
				{STATS.map((stat, index) => (
					<StatBlock
						key={stat.key}
						value={stat.value}
						label={t(`about.stats.${stat.key}`)}
						delay={0.12 * (index + 1)}
						inView={statsInView}
					/>
				))}
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 lg:hidden">
				{STATS.map((stat) => (
					<div key={stat.key} className="flex flex-col gap-1">
						<span className="font-koulen text-[2.5rem] leading-none text-ink-900">
							<AnimatedNumber value={stat.value} inView={bodyInView} />
						</span>
						<span className="font-inter text-[0.65rem] font-semibold tracking-widest uppercase text-wash-200 leading-snug whitespace-pre-line">
							{t(`about.stats.${stat.key}`)}
						</span>
					</div>
				))}
				<div className="flex flex-col gap-1">
					<InfinityIcon inView={bodyInView} />
					<span className="font-inter text-[0.65rem] font-semibold tracking-widest uppercase text-wash-200 leading-snug whitespace-pre-line">
						{t("about.stats.learning")}
					</span>
				</div>
			</div>
		</>
	);
};

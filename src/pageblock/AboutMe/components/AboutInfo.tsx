"use client";

import { motion } from "motion/react";
import React from "react";
import { LANGUAGES, TECH_STACK } from "@/data/about";
import { useLanguage } from "@/context/LanguageContext";
import { InfoSection } from "./InfoSection";
import { TepigTooltip } from "./TepigTooltip";

const EASE = [0.2, 0.8, 0.2, 1] as const;
const itemFadeUp = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: EASE },
	},
};

export const AboutInfo = ({ inView }: { inView: boolean }) => {
	const { t } = useLanguage();

	return (
		<div className="flex-1 min-w-0">
			<motion.h3
				variants={itemFadeUp}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				custom={0}
				className="font-koulen text-[2rem] tracking-[0.04em] uppercase mb-5 lg:mb-7"
			>
				{t("about.infoTitle")}
			</motion.h3>

			<InfoSection
				number="01"
				title={t("about.sections.profile")}
				delay={0.05}
				inView={inView}
			>
				<motion.p
					variants={itemFadeUp}
					className="font-inter text-[0.85rem] leading-relaxed text-wash-300 max-w-110"
				>
					{t("about.bio")} <TepigTooltip>{t("about.pokemon")}</TepigTooltip>.
				</motion.p>
			</InfoSection>

			<InfoSection
				number="02"
				title={t("about.sections.techStack")}
				delay={0.15}
				inView={inView}
			>
				<div className="flex flex-col gap-0.5">
					{TECH_STACK.map((row) => (
						<motion.div
							variants={itemFadeUp}
							key={row.key}
							className="flex items-baseline gap-4 py-0.75"
						>
							<span className="font-inter text-[0.7rem] sm:text-[0.7rem] font-bold tracking-widest uppercase text-ink-900 min-w-25 sm:min-w-32.5 shrink-0">
								{t(`about.techLabel.${row.key}`)}
							</span>
							<span className="font-inter text-[0.8rem] text-wash-300 flex flex-wrap gap-x-1">
								{row.items.map((item, index) => (
									<React.Fragment key={item}>
										{index > 0 && (
											<span className="text-wash-100 mx-0.5">•</span>
										)}
										<span className="hover:text-accent-orange transition-colors cursor-default">
											{item}
										</span>
									</React.Fragment>
								))}
							</span>
						</motion.div>
					))}
				</div>
			</InfoSection>

			<InfoSection
				number="03"
				title={t("about.sections.languages")}
				delay={0.25}
				inView={inView}
			>
				<div className="flex flex-wrap items-baseline gap-6">
					{LANGUAGES.map((language, index) => (
						<motion.div
							variants={itemFadeUp}
							key={language.code}
							className={`flex items-baseline gap-2 font-inter ${
								index < LANGUAGES.length - 1
									? "pr-6 border-r border-paper-300"
									: ""
							}`}
						>
							<span className="text-[0.85rem] font-bold uppercase text-ink-900">
								{language.code}
							</span>
							<span className="text-[0.8rem] text-wash-200">
								{t(`about.langLevels.${language.levelKey}`)}
							</span>
						</motion.div>
					))}
				</div>
			</InfoSection>
		</div>
	);
};

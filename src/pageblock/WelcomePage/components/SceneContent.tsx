"use client";

import { motion, MotionValue } from "motion/react";
import { CSSProperties } from "react";
import { HighlightedTitle } from "./HighlightedTitle";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
	nameScale: MotionValue<number>;
	nameXDesktop: MotionValue<string>;
	nameYMobile: MotionValue<string>;
	titlesProgress: MotionValue<number>;
	titlesOpacity: MotionValue<number>;
};

export const SceneContent = ({
	nameScale,
	nameXDesktop,
	nameYMobile,
	titlesProgress,
	titlesOpacity,
}: Props) => {
	const { t } = useLanguage();

	return (
		<div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
			<motion.h1
				style={
					{
						"--name-scale": nameScale,
						"--name-x": nameXDesktop,
						"--name-y": nameYMobile,
					} as CSSProperties
				}
				className="welcome-name leading-none text-center font-bold text-[6rem] md:text-[10rem] lg:text-[20rem]"
			>
				AIDAR.
			</motion.h1>

			<motion.div
				style={{ opacity: titlesOpacity, pointerEvents: titlesOpacity }}
				className="font-medium text-2xl md:text-4xl absolute bottom-[20%] md:bottom-auto md:right-24 text-center md:text-left space-y-2"
			>
				<HighlightedTitle
					text={t("welcome.title1")}
					progress={titlesProgress}
					range={[0.0, 0.33]}
				/>
				<HighlightedTitle
					text={t("welcome.title2")}
					progress={titlesProgress}
					range={[0.33, 0.66]}
				/>
				<HighlightedTitle
					text={t("welcome.title3")}
					progress={titlesProgress}
					range={[0.66, 1]}
				/>
			</motion.div>
		</div>
	);
};

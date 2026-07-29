"use client";

import { useLanguage } from "@/context/LanguageContext";

export const LanguageSelector = () => {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="fixed top-6 right-6 md:top-8 md:right-8 z-100 flex items-center bg-ink-900/60 backdrop-blur-xl p-1 rounded-full border border-ink-700 font-inter text-[0.7rem] font-bold tracking-wider select-none">
			<button
				onClick={() => setLanguage("en")}
				className={`px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
					language === "en"
						? "bg-main-white text-ink-900"
						: "text-paper-200 hover:text-main-white"
				}`}
			>
				EN
			</button>
			<button
				onClick={() => setLanguage("ru")}
				className={`px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
					language === "ru"
						? "bg-main-white text-ink-900"
						: "text-paper-200 hover:text-main-white"
				}`}
			>
				RU
			</button>
		</div>
	);
};

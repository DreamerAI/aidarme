"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import translationsData from "@/data/translations.json";

export type Language = "en" | "ru";

type LanguageContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

const translations = translationsData as Record<Language, Record<string, any>>;

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [language, setLanguageState] = useState<Language>("en");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
		if (savedLang === "en" || savedLang === "ru") {
			setLanguageState(savedLang);
		} else {
			const browserLang =
				navigator.language || (navigator as any).userLanguage || "";
			if (browserLang.toLowerCase().startsWith("ru")) {
				setLanguageState("ru");
			} else {
				setLanguageState("en");
			}
		}
		setMounted(true);
	}, []);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem("portfolio_lang", lang);
	};

	const t = (keyPath: string) => {
		const keys = keyPath.split(".");
		let current: any = translations[language];
		for (const key of keys) {
			if (current && key in current) {
				current = current[key];
			} else {
				let fallback: any = translations["en"];
				for (const fallbackKey of keys) {
					if (fallback && fallbackKey in fallback) {
						fallback = fallback[fallbackKey];
					} else {
						return keyPath;
					}
				}
				return fallback;
			}
		}
		return current;
	};

	useEffect(() => {
		if (mounted) {
			document.title = t("metadata.title");
			const metaDesc = document.querySelector('meta[name="description"]');
			if (metaDesc) {
				metaDesc.setAttribute("content", t("metadata.description"));
			}
		}
	}, [language, mounted]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

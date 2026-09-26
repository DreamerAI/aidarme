"use client";

import type React from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import translationsData from "@/data/translations.json";

export type Language = "en" | "ru";

type TranslationValue =
	| string
	| string[]
	| { [key: string]: TranslationValue };

type LanguageContextType = {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	tList: (key: string) => string[];
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

const translations = translationsData as Record<Language, TranslationValue>;

const resolveTranslation = (
	language: Language,
	keys: string[],
): TranslationValue | undefined => {
	let current = translations[language];

	for (const key of keys) {
		if (
			typeof current !== "object" ||
			Array.isArray(current) ||
			!(key in current)
		) {
			return undefined;
		}

		current = current[key];
	}

	return current;
};

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
			const browserLang = navigator.language || "";
			if (browserLang.toLowerCase().startsWith("ru")) {
				setLanguageState("ru");
			} else {
				setLanguageState("en");
			}
		}
		setMounted(true);
	}, []);

	const setLanguage = useCallback((lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem("portfolio_lang", lang);
	}, []);

	const getTranslation = useCallback(
		(keyPath: string) => {
			const keys = keyPath.split(".");
			return (
				resolveTranslation(language, keys) ??
				resolveTranslation("en", keys)
			);
		},
		[language],
	);

	const t = useCallback(
		(keyPath: string) => {
			const translation = getTranslation(keyPath);
			return typeof translation === "string" ? translation : keyPath;
		},
		[getTranslation],
	);

	const tList = useCallback(
		(keyPath: string) => {
			const translation = getTranslation(keyPath);
			return Array.isArray(translation) ? translation : [];
		},
		[getTranslation],
	);

	useEffect(() => {
		if (mounted) {
			document.title = t("metadata.title");
			const metaDesc = document.querySelector('meta[name="description"]');
			if (metaDesc) {
				metaDesc.setAttribute("content", t("metadata.description"));
			}
		}
	}, [mounted, t]);

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t, tList }}>
			{children}
		</LanguageContext.Provider>
	);
};

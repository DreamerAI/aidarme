import "./globals.css";
import type { Metadata } from "next";
import { Koulen, Inter, Press_Start_2P } from "next/font/google";
import { SmoothScrollLayout } from "@/layout/SmoothScrollLayout";
import { ViewTransitions } from "next-view-transitions";
import { YandexMetrica } from "@/components/Analytics/YandexMetrica";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSelector } from "@/components/UI/Navigation/LanguageSelector";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const koulen = Koulen({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-koulen",
});
const pressStart2P = Press_Start_2P({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-press-start",
});

export const metadata: Metadata = {
	title: {
		default: "Aidar Abdykaiymov | Frontend Engineer & UI Designer",
		template: "%s | Aidar Abdykaiymov",
	},
	description:
		"Portfolio of Aidar Abdykaiymov (DreamerAI) - Frontend Engineer and UI/UX Designer based in Moscow. Exploring creative web development, high-performance web apps, and modern design.",
	keywords: [
		"Aidar Abdykaiymov",
		"DreamerAI",
		"Frontend Engineer",
		"Frontend Developer",
		"React Specialist",
		"UI Designer",
		"Web Developer",
		"Moscow",
		"Portfolio",
	],
	authors: [{ name: "Aidar Abdykaiymov" }],
	creator: "Aidar Abdykaiymov",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://github.com/DreamerAI",
		title: "Aidar Abdykaiymov | Frontend Engineer & UI Designer",
		description:
			"Portfolio of Aidar Abdykaiymov (DreamerAI) - Frontend Engineer and UI/UX Designer based in Moscow.",
		siteName: "Aidar Abdykaiymov Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Aidar Abdykaiymov | Frontend Engineer",
		description:
			"Portfolio of Aidar Abdykaiymov (DreamerAI) - Frontend Engineer and UI/UX Designer based in Moscow.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ViewTransitions>
			<html lang="en" className="scroll-smooth">
				<body
					className={`${koulen.variable} ${inter.variable} ${pressStart2P.variable} font-koulen`}
				>
					<LanguageProvider>
						<LanguageSelector />
						<YandexMetrica />
						<SmoothScrollLayout>
							<div className="flex flex-col relative bg-black">{children}</div>
						</SmoothScrollLayout>
					</LanguageProvider>
				</body>
			</html>
		</ViewTransitions>
	);
}

import "./globals.css";
import type { Metadata } from "next";
import { Koulen, Inter, Press_Start_2P } from "next/font/google";
import { SmoothScrollLayout } from "@/layout/SmoothScrollLayout";
import { ViewTransitions } from "next-view-transitions";

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
	title: "DreamerAI",
	description:
		"Portfolio of DreamerAI - Frontend Developer and UI/UX Designer based in Moscow.",
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
					<SmoothScrollLayout>
						<div className="flex flex-col relative bg-black">{children}</div>
					</SmoothScrollLayout>
				</body>
			</html>
		</ViewTransitions>
	);
}

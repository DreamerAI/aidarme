"use client";

import { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "@/data/socials";
import { useLanguage } from "@/context/LanguageContext";
import { TitleReveal } from "./components/TitleReveal";
import { PokeballButton } from "./components/PokeballButton";

export const Contacts = () => {
	const { t } = useLanguage();
	const [time, setTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			const moscowTime = new Intl.DateTimeFormat("en-GB", {
				timeZone: "Europe/Moscow",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}).format(new Date());
			setTime(`${moscowTime} MSK`);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="contact"
			className="relative w-full bg-main-white text-ink-900 pt-32 pb-10 px-6 md:px-20 flex flex-col justify-between min-h-screen"
		>
			<div className="flex flex-col md:flex-row justify-between items-start gap-10">
				<div className="max-w-md">
					<h3 className="font-koulen text-3xl md:text-5xl mb-4 tracking-wide">
						{t("contacts.headline")}
					</h3>
					<p className="font-inter text-ink-700 text-sm md:text-base leading-relaxed">
						{t("contacts.subheadline")}
					</p>
				</div>

				<div className="flex flex-col items-start md:items-end gap-2 font-inter text-sm font-bold tracking-widest uppercase">
					<span className="text-ink-500 mb-2">{t("contacts.localTime")}</span>
					<span className="bg-ink-100 px-4 py-2 rounded-full tabular-nums min-w-30 text-center">
						{time || t("contacts.loading")}
					</span>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center flex-1 my-20">
				<TitleReveal />
				<PokeballButton />
			</div>

			<div className="flex flex-col md:flex-row justify-between items-end border-t border-ink-200 pt-8 gap-6">
				<div className="flex flex-wrap gap-6 font-inter text-sm font-bold tracking-widest uppercase">
					{SOCIAL_LINKS.map((social) => (
						<a
							key={social.name}
							href={social.url}
							target={social.name === "Email" ? undefined : "_blank"}
							rel={social.name === "Email" ? undefined : "noopener noreferrer"}
							className="relative overflow-hidden group py-1"
						>
							<span className="block group-hover:-translate-y-[120%] transition-transform duration-300 ease-out">
								{social.name}
							</span>
							<span className="absolute inset-0 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 ease-out text-accent-orange">
								{social.name}
							</span>
						</a>
					))}
				</div>

				<div className="font-inter text-[0.6rem] md:text-xs font-semibold tracking-widest text-ink-400 uppercase">
					© {new Date().getFullYear()} {t("contacts.copyright")}
				</div>
			</div>
		</section>
	);
};

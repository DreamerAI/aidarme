"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { AboutMeCard } from "@/components";
import { PagesLayout } from "@/layout/PagesLayout";

const aboutMeData = [
	{
		title: "Years of Experience",
		value: 3,
	},
	{
		title: "Projects Completed",
		value: 10,
	},
	{
		title: "Happy Clients",
		value: 5,
	},
	{
		title: "Cups of Coffee",
		value: 100,
	},
];

export const AboutMe = () => {
	return (
		<PagesLayout>
			<div className="flex w-full gap-10 md:gap-4 flex-col-reverse md:flex-row justify-between h-full">
				<motion.div
					className="w-full md:w-1/2 max-w-4xl flex flex-col gap-6 lg:gap-10 text-aboutme tracking-tight"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.3 }}
				>
					<h3 className="md:text-5xl text-4xl font-semibold uppercase md:text-left">
						{" "}
						Aidar Abdykayimov
					</h3>
					<div className="flex flex-col gap-10 leading-paragraph font-normal">
						<p>
							I am a passionate and experienced frontend developer and UI
							designer with a passion for creating user-friendly and visually
							appealing web interfaces. I have a strong understanding of HTML,
							CSS, and JavaScript, and I am proficient in React. I am also
							skilled in UI design principles and can create high-fidelity
							mockups that translate seamlessly into functional web interfaces.
						</p>
					</div>

					<motion.div
						className="grid grid-cols-2 grid-rows-2 gap-4"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						viewport={{ once: false, amount: 0.3 }}
					>
						{aboutMeData.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.15, duration: 0.5 }}
								viewport={{ once: false, amount: 0.8 }}
							>
								<AboutMeCard
									title={item.title}
									value={item.value}
									index={index}
								/>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
				<motion.div
					className="md:px-0"
					initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
					whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
					viewport={{ once: false, amount: 0.3 }}
				>
					<Image
						src="/images/aidar.png"
						alt="Picture of the author"
						className="rounded-lg w-full"
						width={350}
						height={350}
					/>
				</motion.div>
			</div>
		</PagesLayout>
	);
};

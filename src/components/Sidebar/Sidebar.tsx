"use client";
import React, { useState } from "react";

import { SidebarItems } from "./SidebarItems";
import {
	ArrowBottom,
	ArrowTop,
	Contact,
	Home,
	Portfolio,
	Skills,
} from "@/assets/icons";

type Props = {};

const sidebarItemsIcons = [
	{
		iconName: "Home",
		icon: <Home className="w-8 h-8" />,
	},
	{
		iconName: "Skills",
		icon: <Skills className="w-8 h-8" />,
	},
	{
		iconName: "Portfolio",
		icon: <Portfolio className="w-8 h-8" />,
	},
	{
		iconName: "Contact",
		icon: <Contact className="w-8 h-8" />,
	},
];

export const Sidebar = (props: Props) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleMobileSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<>
			<ul className="hidden md:flex flex-col gap-3 md:animate-slideOut md:group-hover:animate-slideIn">
				{sidebarItemsIcons.map((item, index) => (
					<SidebarItems key={index} anchor={item.iconName}>
						{item.icon}
					</SidebarItems>
				))}
			</ul>

			{/* MOBILE SIDEBAR */}
			<div className="md:hidden transition-all flex flex-col gap-3">
				<ul
					className={`flex flex-col gap-3 transition-all duration-500 ${showSidebar ? "translate-y-0" : "-translate-y-[-150%]"}`}
				>
					{sidebarItemsIcons.map((item, index) => (
						<SidebarItems key={index} anchor={item.iconName}>
							{item.icon}
						</SidebarItems>
					))}
				</ul>
				<button onClick={toggleMobileSidebar}>
					{showSidebar ? (
						<div className="group w-12 h-12 bg-white rounded-xl flex justify-center items-center shadow-[0px_0px_5px_2px_#cbd5e0] hover:bg-main-dark hover:text-white duration-500 transition-all">
							<ArrowBottom className="w-10 h-10" />
						</div>
					) : (
						<div className="group w-12 h-12 bg-white rounded-xl flex justify-center items-center shadow-[0px_0px_5px_2px_#cbd5e0] hover:bg-main-dark hover:text-white duration-500 transition-all">
							<ArrowTop className="w-10 h-10" />
						</div>
					)}
				</button>
			</div>
		</>
	);
};

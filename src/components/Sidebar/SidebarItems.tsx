import Link from "next/link";
import React from "react";

type Props = {
	children: React.ReactNode;
	anchor?: string;
};

export const SidebarItems = ({ children, anchor }: Props) => {
	return (
		<Link href={`#${anchor}`}>
			<li className="group w-12 h-12 bg-white rounded-xl flex justify-center items-center shadow-[0px_0px_5px_2px_#cbd5e0] hover:bg-main-dark active:bg-main-dark hover:text-white duration-500 md:hover:translate-x-2 hover:-translate-x-2 transition-all">
				{children}
			</li>
		</Link>
	);
};

"use client";

import React from "react";
import { InView } from "react-intersection-observer";

type Props = {
	children: React.ReactNode;
};

export const PagesLayout = ({ children }: Props) => {
	return (
		<div className={`max-w-360 px-4 py-10 lg:px-10 w-full opacity-100`}>
			{children}
		</div>
	);
};

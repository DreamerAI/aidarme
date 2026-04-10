import React from "react";

type Props = {
	jobTitle?: string;
	jobDate?: string;
};

export const JobCard = ({ jobDate, jobTitle }: Props) => {
	return (
		<>
			<div className="flex flex-col gap-3">
				<p className="font-semibold text-main-dark">{jobTitle}</p>
				<p className="text-text-gray">{jobDate}</p>
			</div>
			<p className="text-text-link">View Detais</p>
		</>
	);
};

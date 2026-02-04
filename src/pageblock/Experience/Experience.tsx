import { JobCard } from "@/components/UI/JobCard/JobCard";
import { PagesLayout } from "@/layout/PagesLayout";
import Link from "next/link";
import React from "react";

type Props = {};

const jobs = [
	{
		jobId: 1,
		jobDate: "Jan 2023 - Present",
		jobTitle: "Discopus",
	},
	{
		jobId: 2,
		jobDate: "Jan 2023 - Present",
		jobTitle: "Discopus",
	},
];

export const Experience = (props: Props) => {
	return (
		<PagesLayout>
			<div className="flex items-start w-full flex-col md:flex-row">
				<h1 className=" text-text-gray text-2xl md:text-xl uppercase">
					Experience
				</h1>
				<div className="w-full mt-6 md:mt-0 md:ml-10 gap-4 flex flex-col md:flex-row">
					{jobs.map((job, index) => (
						<Link
							href={`/jobs/${job.jobId}`}
							key={index}
							className="flex items-center rounded-xl w-full justify-between card-hover py-5 px-4"
						>
							<JobCard jobDate={job.jobDate} jobTitle={job.jobTitle} />
						</Link>
					))}
				</div>
			</div>
		</PagesLayout>
	);
};

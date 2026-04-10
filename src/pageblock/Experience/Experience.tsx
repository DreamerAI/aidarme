import { JobCard } from '@/components/UI/JobCard/JobCard';
import { TransitionLink } from '@/components/utils/TransitionLinks';
import { PagesLayout } from '@/layout/PagesLayout';
import { jobsData } from '@/data/jobs';
import React from 'react';

type Props = {};

export const Experience = (props: Props) => {
  return (
    <PagesLayout>
      <div className="flex items-start w-full flex-col md:flex-row">
        <h1 className=" text-text-gray text-2xl md:text-xl uppercase">Experience</h1>
        <div className="w-full mt-6 md:mt-0 md:ml-10 gap-4 flex flex-col md:flex-row">
          {jobsData.map((job) => (
            <TransitionLink
              href={`/jobs/${job.id}`}
              key={job.id}
              className="flex items-center rounded-xl w-full justify-between card-hover py-5 px-4">
              <JobCard jobDate={job.date} jobTitle={job.role} />
            </TransitionLink>
          ))}
        </div>
      </div>
    </PagesLayout>
  );
};

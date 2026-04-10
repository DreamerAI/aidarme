import { jobsData } from "@/data/jobs";
import { BackButton } from "@/components/UI/JobDetails/BackButton";
import { AnimatedJobDetails } from "@/components/UI/JobDetails/AnimatedJobDetails";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return jobsData.map((job) => ({
    jobs: job.id,
  }));
}

interface IJobsPageParams {
  jobs: string;
}

export default async function Page(props: { params: Promise<IJobsPageParams> }) {
  const { jobs } = await props.params;
  
  const jobMatch = jobsData.find((j) => j.id === jobs);

  if (!jobMatch) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col py-10 px-4 sm:px-10 lg:px-20 relative">
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-5 z-0 pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto z-10 mb-8 mt-20 md:mt-2">
        <BackButton />
      </div>

      <div className="w-full max-w-5xl mx-auto z-10">
        <AnimatedJobDetails job={jobMatch} />
      </div>
    </div>
  );
}

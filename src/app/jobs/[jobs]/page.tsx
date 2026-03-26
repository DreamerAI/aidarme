import { use } from 'react';

interface IJobsPageParams {
  jobs: string;
}

export async function generateStaticParams() {
  return [{ jobs: 'default' }];
}

export default async function Page(props: { params: Promise<IJobsPageParams> }) {
  const params = await props.params;

  return (
    <div className="min-h-screen w-full max-w-360">
      <div className="sticky top-0 left-0 w-full h-full">BACK</div>
      My Page: {params.jobs}
    </div>
  );
}

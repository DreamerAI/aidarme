'use client'
import { useParams } from "next/navigation"

interface IJobsPageParams {
  jobs: string
  [key: string]: string
}

export default function Page() {
  const params = useParams<IJobsPageParams>()
  return <div className="min-h-screen w-full max-w-[1440px]">
    <div className="sticky top-0 left-0 w-full h-full">BACK</div>
    My Page: {params.jobs}
  </div>
}
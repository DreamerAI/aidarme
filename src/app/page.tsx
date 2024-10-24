import { AboutMe, Experience, WelcomePage } from "@/pageblock";

export default function Home() {

    return (
        <div className="flex items-center justify-start md:p-0 flex-col">
            <WelcomePage />
            {/* TODO: Add Trigger once */}
            <AboutMe />
            <Experience />
        </div >
    )
}

'use client';

import { AboutMe } from "@/pageblock";
import { WelcomePage } from "@/pageblock/WelcomePage/WelcomePage";
import { InView } from "react-intersection-observer";

export default function Home() {
    return (
        <div className="flex items-center justify-start md:p-0 flex-col">
            <WelcomePage />
            {/* TODO: Add Trigger once */}
            <InView triggerOnce threshold={0.50}>
                {({ inView, ref, entry }) => (
                    <div className={`flex px-16 md:px-4 py-10 w-full gap-10 md:gap-4 flex-col md:flex-row justify-around transition-all duration-1000 min-h-screen h-full ${inView ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-24'}`} ref={ref}>
                        <AboutMe />
                    </div>
                )}
            </InView >
        </div >
    )
}

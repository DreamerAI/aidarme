import { AboutMe, Experience, WelcomePage } from "@/pageblock";
import { WelcomePageV2 } from "@/pageblock/WelcomePage/WelcomePageV2";

export default function Home() {
	return (
		<div className="flex items-center justify-start md:p-0 flex-col w-full">
			<WelcomePageV2 />
			{/* TODO: Add Trigger once */}
			<AboutMe />
			<Experience />
		</div>
	);
}

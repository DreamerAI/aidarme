import { AboutMe, Experience, Projects, Contacts } from "@/pageblock";
import { WelcomePageV2 } from "@/pageblock/WelcomePage/WelcomePageV2";
import { FloatingNav } from "@/components/UI/Navigation/FloatingNav";
import { ScrollSkew } from "@/components/UI/Effects/ScrollSkew";

export default function Home() {
	return (
		<div className="flex flex-col w-full relative">
			<WelcomePageV2 />
			{/* TODO: Add Trigger once */}
			<AboutMe />
			<Experience />
			{/* <Projects /> */}
			<Contacts />
		</div>
	);
}

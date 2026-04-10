import { Header, PageTransition } from "@/components";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* <Header /> */}
			<div className="page-enter-delay">{children}</div>
		</>
	);
}

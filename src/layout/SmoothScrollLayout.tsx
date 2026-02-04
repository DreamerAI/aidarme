import { ReactLenis } from "lenis/react";

export const SmoothScrollLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.08,
				smoothWheel: true,
			}}
		>
			{children}
		</ReactLenis>
	);
};

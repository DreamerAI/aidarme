"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK_IMAGE = "/images/image-placeholder.svg";

export const ResilientImage = ({ src, ...props }: ImageProps) => {
	const [failedSource, setFailedSource] = useState<ImageProps["src"]>();

	return (
		<Image
			{...props}
			src={failedSource === src ? FALLBACK_IMAGE : src}
			onError={() => setFailedSource(src)}
		/>
	);
};

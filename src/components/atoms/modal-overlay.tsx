"use client";

import { useRouter } from "next/navigation";

export const ModalOverlay = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 z-30 bg-slate-800 bg-opacity-75"
		></div>
	);
};

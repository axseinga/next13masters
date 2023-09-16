"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname =  usePathname();
    const isActive = pathname === href;

	return (
		<Link href={href} className={clsx(`hover:text-amber-800`, isActive && `border-b-2 border-b-orange-950`)}>
			{children}
		</Link>
	);
};

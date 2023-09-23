"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
	className: string;
	activeClassName: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname[href.length] === "/" && pathname.startsWith(href));

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={activeClassName ? true : false}
		>
			{children}
		</Link>
	);
};

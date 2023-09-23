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
	exact,
	className,
	activeClassName,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) && pathname[href.length] === "/";

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? true : false}
		>
			{children}
		</Link>
	);
};

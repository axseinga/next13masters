import Link from "next/link";

export const Footer = () => {
	const navLinks = [{ label: "Contact Us", href: "/contact-us" }] as const;

	return (
		<footer className="max-w mx-auto flex w-full content-center justify-between gap-2 border-b border-gray-300 bg-white p-2 px-8">
			<div className="flex items-center justify-items-center gap-10">
				{navLinks.map((link) => (
					<Link key={link.href} href={link.href} className="hover:text-amber-800">
						{link.label}
					</Link>
				))}
			</div>
		</footer>
	);
};

import Image from "next/image";
import { ActiveLink } from "../atoms/active-link";

export const Nav = () => {
	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Products", href: "/products" },
	];

	return (
		<header className="max-w mx-auto flex h-16 w-full content-center justify-center">
			<nav className="max-w mx-auto flex w-full content-center justify-between bg-white p-2 px-8">
				<Image
					src="/assets/shop-logo.png"
					alt="Shoppy"
					width="150"
					height="50"
					layout="intrinsic"
				/>
				<ul className="flex items-center justify-items-center gap-4">
					{navLinks.map((link) => (
						<li key={link.href}>
							<ActiveLink href={link.href}>{link.label}</ActiveLink>
						</li>
					))}
				</ul>
				<div className="flex items-center justify-items-center gap-10">
					<p>Cart</p>
				</div>
			</nav>
		</header>
	);
};

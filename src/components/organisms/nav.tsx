import NextImage from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Searchbar } from "../atoms/searchbar";
import { ActiveLink } from "../atoms/active-link";
import { getCartFromCookies } from "@/app/api/cart";

export const Nav = async () => {
	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "All", href: "/products" },
		{ label: "Summer Vibes", href: "/collections/summer-vibes/1" },
		{ label: "Hoodies", href: "/categories/hoodies/1" },
	] as const;

	const cart = await getCartFromCookies();
	// @todo items quantity 
	const quantity = cart?.orderItems.length ?? 0;

	return (
		<header className="max-w mx-auto flex h-16 w-full content-center justify-center">
			<nav className="max-w mx-auto flex w-full content-center justify-between bg-white px-8 py-9">
				<div className="flex items-center justify-items-center gap-10">
					<Link href="/">
						{" "}
						<NextImage src="/assets/shop-logo.png" alt="Shoppy" width="150" height="50" />
					</Link>
					<ul className="flex items-center justify-items-center gap-4">
						{navLinks.map((link) => (
							<li key={link.href}>
								<ActiveLink
									href={link.href}
									className="hover:text-amber-800"
									activeClassName="border-b-2 border-b-orange-950"
									exact={false}
								>
									{link.label}
								</ActiveLink>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center justify-items-center gap-10">
					<Searchbar />
					<Link href="/cart" className="flex items-end">
						<ShoppingCart />
						<span className="ml-2 text-sm font-medium">{quantity}</span>
					</Link>
				</div>
			</nav>
		</header>
	);
};

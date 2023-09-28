import { ActiveLink } from "@/components/atoms/active-link";

export default function Collections() {

    const links = [
		{ label: "Summer Vibes", href: "/products/collections/summer-vibes/1" },
		{ label: "New Arrivals", href: "/products/collections/new-arrivals/1" },
		{ label: "Elegant Extras", href: "/products/collections/elegant-extras/1" },
	] as const;
	return (
		<main>
				{links.map((link) => (
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
		</main>
	);
}
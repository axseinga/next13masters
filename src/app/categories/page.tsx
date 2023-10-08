import { ActiveLink } from "@/components/atoms/active-link";

export default function Categories() {

    const links = [
		{ label: "T-shirts", href: "/categories/t-shirts/1" },
		{ label: "Hoodies", href: "/categories/hoodies/1" },
		{ label: "Accessories", href: "/categories/accessories/1" },
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

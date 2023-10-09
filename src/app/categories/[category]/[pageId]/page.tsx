import { type Metadata } from "next";
import { executeGraphql } from "@/app/api/graphqlApi";
import { ActiveLink } from "@/components/atoms/active-link";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { ProductsGetListByCategoryDocument } from "@/gql/graphql";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const category = params.category.charAt(0).toUpperCase() + params.category.slice(1);
	return {
		title: `${category} - Shop`,
	};
};

export default async function ProductsByCategory({
	params,
}: {
	params: { category: string; pageId: string };
}) {
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	const { products } = await executeGraphql({ query: ProductsGetListByCategoryDocument, variables: {
		first: PRODUCTS_PER_PAGE,
		skip: skip,
		category: params.category,
	}});

	const links = [
		{ label: "T-shirts", href: "/categories/t-shirts/1" },
		{ label: "Hoodies", href: "/categories/hoodies/1" },
		{ label: "Accessories", href: "/categories/accessories/1" },
	] as const;

	const category = params.category.charAt(0).toUpperCase() + params.category.slice(1);

	return (
		<main>
			<h2>{category}</h2>
			<div className="flex">
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
			</div>
			<ProductsList products={products} />
			<Pagination category={params.category} pagesCount={products.length / PRODUCTS_PER_PAGE} />
		</main>
	);
}

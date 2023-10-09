import { type Metadata } from "next";
import { executeGraphql } from "@/app/api/graphqlApi";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { ProductsGetListByCollectionDocument } from "@/gql/graphql";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";
import { ActiveLink } from "@/components/atoms/active-link";

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	const collectionNameArr = params.collection.split("-");
	const collectionName = collectionNameArr
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
	return {
		title: collectionName,
	};
};

export default async function ProductsByCollection({
	params,
}: {
	params: { collection: string; pageId: string };
}) {
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	const { products } = await executeGraphql({ query: ProductsGetListByCollectionDocument, variables: {
		first: PRODUCTS_PER_PAGE,
		skip: skip,
		collection: params.collection,
	}});

	const links = [
		{ label: "Summer Vibes", href: "/collections/summer-vibes/1" },
		{ label: "New Arrivals", href: "/collections/new-arrivals/1" },
		{ label: "Elegant Extras", href: "/collections/elegant-extras/1" },
	] as const;

	const collectionNameArr = params.collection.split("-");
	const collectionName = collectionNameArr
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return (
		<main>
			<h2>{collectionName}</h2>
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
			<Pagination category={params.collection} pagesCount={products.length / PRODUCTS_PER_PAGE} />
		</main>
	);
}

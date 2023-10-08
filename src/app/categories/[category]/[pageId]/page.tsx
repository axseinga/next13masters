import { executeGraphql } from "@/app/api/graphqlApi";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { ProductsGetListByCategoryDocument } from "@/gql/graphql";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";

export default async function ProductsByCategory({
	params,
}: {
	params: { category: string; pageId: string };
}) {
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	const { products } = await executeGraphql(ProductsGetListByCategoryDocument, {
		first: PRODUCTS_PER_PAGE,
		skip: skip,
		category: params.category,
	});

	return (
		<main>
			<h2>{params.category}</h2>
			<ProductsList products={products} />
			<Pagination category={params.category} pagesCount={products.length / PRODUCTS_PER_PAGE} />
		</main>
	);
}

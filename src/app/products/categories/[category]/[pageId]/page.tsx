import { executeGraphql } from "@/app/api/graphqlApi";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { ProductsGetCountDocument, ProductsGetListByCategoryDocument } from "@/gql/graphql";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";

export default async function ProductsByCategory({
	params,
}: {
	params: { category: string; pageId: string };
}) {
	const productsConnection = await executeGraphql(ProductsGetCountDocument);
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	const { products } = await executeGraphql(ProductsGetListByCategoryDocument, {
		first: PRODUCTS_PER_PAGE,
		skip: skip,
		category: params.category,
	});

	const productsCount = productsConnection.productsConnection.aggregate.count;
	return (
		<main>
			<ProductsList products={products} />
			<Pagination category={params.category} pagesCount={productsCount / PRODUCTS_PER_PAGE} />
		</main>
	);
}

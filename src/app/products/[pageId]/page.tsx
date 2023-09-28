import { executeGraphql } from "@/app/api/graphqlApi";
import { ProductsGetListByPageDocument } from "@/gql/graphql";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";

export default async function Products({ params }: { params: { pageId: string } }) {
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	// const { productsConnection } = executeGraphql(ProductsGetCountDocument);
	const { products } = await executeGraphql(ProductsGetListByPageDocument, {
		first: PRODUCTS_PER_PAGE,
		skip: skip,
	});

	return (
		<main>
			<ProductsList products={products} />
			<Pagination pagesCount={16 / PRODUCTS_PER_PAGE} />
		</main>
	);
}

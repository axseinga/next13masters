import { executeGraphql } from "@/app/api/graphqlApi";
import { ProductsGetCountDocument, ProductsGetListByPageDocument } from "@/gql/graphql";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";

export default async function Products({ params }: { params: { pageId: string } }) {
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	const productsConnection = await executeGraphql({ query: ProductsGetCountDocument });
	const { products } = await executeGraphql({
		query: ProductsGetListByPageDocument,
		variables: {
			first: PRODUCTS_PER_PAGE,
			skip: skip,
		},
		next: {
			revalidate: 15,
		},
	});
	const productsCount = productsConnection.productsConnection.aggregate.count;

	return (
		<main>
			<ProductsList products={products} />
			<Pagination pagesCount={productsCount / PRODUCTS_PER_PAGE} />
		</main>
	);
}

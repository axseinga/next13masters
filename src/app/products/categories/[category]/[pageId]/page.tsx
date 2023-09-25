import { executeGraphql } from "@/app/api/graphqlApi";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { ProductsGetListDocument } from "@/gql/graphql";

export default async function Products({
	params,
}: {
	params: { category: string; pageId: string };
}) {
	// @todo get products by page
	const { products } = await executeGraphql(ProductsGetListDocument);
	return (
		<main>
			<ProductsList products={products} />
			<Pagination category={params.category} />
		</main>
	);
}

import { executeGraphql } from "@/app/api/graphqlApi";
import { ProductsGetListDocument } from "@/gql/graphql";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";

export default async function Products(/*{ params }: { params: { pageId: string } }*/) {
	const { products } = await executeGraphql(ProductsGetListDocument);

	return (
		<main>
			<ProductsList products={products} />
			<Pagination />
		</main>
	);
}

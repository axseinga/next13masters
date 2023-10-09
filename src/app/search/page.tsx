import { executeGraphql } from "@/app/api/graphqlApi";
import { ProductsSearchByQueryDocument } from "@/gql/graphql";
import { ProductsList } from "@/components/molecules/products-list";

export default async function Search({ searchParams }: { searchParams: { [key: string]: string } }) {
	const { products } = await executeGraphql({ query: ProductsSearchByQueryDocument, variables: {
		param: searchParams.query
	}});

	return (
		<main>
			<ProductsList products={products} />
		</main>
	);
}
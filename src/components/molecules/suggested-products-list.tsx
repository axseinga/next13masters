import { ProductsList } from "./products-list";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/app/api/graphqlApi";

export const SuggestedProductsList = async () => {
	const { products } = await executeGraphql(ProductsGetListDocument);
	return (
		<div data-testid="related-products">
			<ProductsList products={products.slice(-4)} />
		</div>
	);
};

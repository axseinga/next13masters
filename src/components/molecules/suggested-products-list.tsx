import { ProductsList } from "./products-list";
import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/app/api/graphqlApi";

export const SuggestedProductsList = async () => {
	const { products } = await executeGraphql(ProductsGetListDocument);
	return <ProductsList products={products.slice(-4)} data-testid="related-products"/>;
};

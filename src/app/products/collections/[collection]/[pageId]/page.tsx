import { executeGraphql } from "@/app/api/graphqlApi";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";
import { ProductsGetListByCollectionDocument } from "@/gql/graphql";
import { PRODUCTS_PER_PAGE } from "@/utils/consts";

export default async function ProductsByCollection({
	params,
}: {
	params: { collection: string; pageId: string };
}) {
	const skip: number = (Number(params.pageId) - 1) * PRODUCTS_PER_PAGE;
	const { products } = await executeGraphql(ProductsGetListByCollectionDocument, {first: PRODUCTS_PER_PAGE,
		skip: skip, collection: params.collection});
	return (
		<main>
			<ProductsList products={products} />
			<Pagination category={params.collection} pagesCount={2}/>
		</main>
	);
}
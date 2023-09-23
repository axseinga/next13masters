import { getProductsList } from "@/app/api/products";
import { Pagination } from "@/components/molecules/pagination";
import { ProductsList } from "@/components/molecules/products-list";

export default async function Products({ params }: { params: { pageId: string } }) {
	const products = await getProductsList(20, params.pageId);
	return (
		<main>
			<ProductsList products={products} />
			<Pagination/>
		</main>
	);
}

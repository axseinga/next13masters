import { ProductsList } from "./products-list";
import { getProductsList } from "@/app/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProductsList();

	return <ProductsList products={products.slice(-4)} />;
};

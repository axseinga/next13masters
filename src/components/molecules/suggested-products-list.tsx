import { ProductsList } from "./products-list";
import { getProducts } from "@/app/api/products";

export const SuggestedProductsList = async () => {
	const products = await getProducts(20);
	return <ProductsList products={products.slice(-4)} />;
};

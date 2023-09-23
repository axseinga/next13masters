import type { ProductResponseItemT, ProductListItemT } from "@/types";

const url = "https://naszsklep-api.vercel.app/api/products";

export const getProductsList = async (take: number, pageId: string = "0") => {
	const offset = (Number(pageId) - 1) * take;
	const res = await fetch(`${url}?take=${take}&offset=${offset}`);
	const data = (await res.json()) as ProductResponseItemT[];

	const products = data.map(productResponseItemToProductItemT);

	return products;
};

export const getProductById = async (id: ProductResponseItemT["id"]) => {
	const res = await fetch(`${url}/${id}`);
	const data = (await res.json()) as ProductResponseItemT;

	return productResponseItemToProductItemT(data);
};

export const productResponseItemToProductItemT = (
	product: ProductResponseItemT,
): ProductListItemT => {
	return {
		id: product.id,
		title: product.title,
		description: product.description,
		image: {
			url: product.image,
			alt: product.title,
		},
		price: product.price,
		review_score: product.rating.rate,
	};
};

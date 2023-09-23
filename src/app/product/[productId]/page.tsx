import type { Metadata } from "next";
import { Suspense } from "react";
import { getProductById, getProductsList } from "@/app/api/products";
import { ProductCoverImage } from "@/components/atoms/product-cover-image";
import { SuggestedProductsList } from "@/components/molecules/suggested-products-list";

export const generateStaticParams = async () => {
	const products = await getProductsList(20);
	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.title} - Shop`,
		description: product.description,
	};
};

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<main>
			<article className="flex bg-white p-4">
				<ProductCoverImage src={product.image.url} alt={product.image.alt} />
				<div>
					<h1 className="p-4 text-3xl font-bold">{product.title}</h1>
					<p className="p-4">{product.description}</p>
				</div>
			</article>
			<aside>
				<Suspense fallback={"Loading..."}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</main>
	);
}

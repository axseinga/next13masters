import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductCoverImage } from "@/components/atoms/product-cover-image";
import { SuggestedProductsList } from "@/components/molecules/suggested-products-list";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/app/api/graphqlApi";

export const generateStaticParams = async () => {
	const { products } = await executeGraphql(ProductsGetListDocument);
	return products.map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.productId });

	if (!product)
		return {
			title: "Happy Shop",
			description: "Happy Shop",
		};

	return {
		title: `${product.name} - Shop`,
		description: product.description,
	};
};

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.productId });

	if (!product) {
		return notFound();
	}

	return (
		<main>
			<article className="flex bg-white p-4">
				<ProductCoverImage src={product.images[0].url} alt={product.name} />
				<div>
					<h1 className="p-4 text-3xl font-bold">{product.name}</h1>
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

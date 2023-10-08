import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ProductCoverImage } from "@/components/atoms/product-cover-image";
import { SuggestedProductsList } from "@/components/molecules/suggested-products-list";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/app/api/graphqlApi";

export const generateStaticParams = async () => {
	const { products } = await executeGraphql(ProductsGetListDocument);
	return products.slice(-2).map((product) => ({
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

	const variants: string[] = [];
	product.variants.forEach((variant) => {
		if (Object.keys(variant).length === 0) return;
		const productVariant = variant as { name: string };
		variants.push(productVariant.name.toLowerCase());
	});

	return (
		<main>
			<article className="flex bg-white p-4">
				<ProductCoverImage src={product.images[0].url} alt={product.name} />
				<div className="flex flex-col justify-between gap-5 py-10">
					<div className="flex flex-col justify-between gap-5">
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p>{product.description}</p>
						<form className="flex w-full flex-col gap-5">
							<div className="flex items-center justify-start">
								<div className="flex gap-2">
									{variants.map((variant, index) => (
										<div key={index} className="inline-flex rounded-lg bg-slate-200">
											<input type="radio" name="room_type" id="roomPrivate" checked hidden />
											<label
												htmlFor="roomPrivate"
												className="radio cursor-pointer self-center rounded-lg px-4 py-2 text-center hover:opacity-75"
											>
												{variant}
											</label>
										</div>
									))}
								</div>
							</div>
						</form>
					</div>
					<button className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white">
						Add to basket
					</button>
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

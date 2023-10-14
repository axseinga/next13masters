import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { revalidateTag } from "next/cache";
import { ProductCoverImage } from "@/components/atoms/product-cover-image";
import { SuggestedProductsList } from "@/components/molecules/suggested-products-list";
import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/app/api/graphqlApi";
import { AddToCartButton } from "@/components/atoms/add-to-cart-button";
import { addToCart, getOrCreateCart } from "@/app/api/cart";
import { ProductReviewContainer } from "@/components/product-review/prodct-review-container";

export const generateStaticParams = async () => {
	const { products } = await executeGraphql({ query: ProductsGetListDocument, variables: {} });
	return products.slice(-2).map((product) => ({
		productId: product.id,
	}));
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.productId },
	});

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
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.productId },
	});

	if (!product) {
		return notFound();
	}

	const variants: string[] = [];
	product.variants.forEach((variant) => {
		if (Object.keys(variant).length === 0) return;
		const productVariant = variant as { name: string };
		variants.push(productVariant.name.toLowerCase());
	});

	const addToCartAction = async (_formData: FormData) => {
		"use server";

		const cart = await getOrCreateCart();
		await addToCart(cart.id, params.productId);

		revalidateTag("cart");
	};

	return (
		<main className="flex flex-col gap-10">
			<div className="grid grid-cols-2 gap-5">
				<article className="grid grid-cols-[40%_minmax(60%,_1fr)_100px] border-2 shadow-xl p-4">
					<ProductCoverImage src={product.images[0].url} alt={product.name} />
					<form className="flex flex-col justify-between gap-5 py-10" action={addToCartAction}>
						<div className="flex flex-col justify-between gap-5">
							<h1 className="text-3xl font-bold">{product.name}</h1>
							<p>{product.description}</p>
							<div className="flex w-full flex-col gap-5">
								<div className="flex items-center justify-start">
									<div className="flex gap-2">
										{variants.map((variant, index) => (
											<div key={index} className="inline-flex rounded-lg bg-slate-200">
												<input type="radio" name="variant" id="variant" hidden />
												<label
													htmlFor="variant"
													className="radio cursor-pointer self-center rounded-lg px-4 py-2 text-center hover:opacity-75"
												>
													{variant}
												</label>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<AddToCartButton />
					</form>
				</article>

				<aside>
					<Suspense fallback={"Loading..."}>
						<SuggestedProductsList />
					</Suspense>
				</aside>
			</div>
			<ProductReviewContainer productId={params.productId} />
		</main>
	);
}

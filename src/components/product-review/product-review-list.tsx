import { ProductReviewItem } from "./product-review-item";
import { executeGraphql } from "@/app/api/graphqlApi";
import { ProductGetReviewsDocument } from "@/gql/graphql";

interface ProductReviewListProps {
	productId: string;
}

export const ProductReviewList = async ({ productId }: ProductReviewListProps) => {
	const { product } = await executeGraphql({
		query: ProductGetReviewsDocument,
		variables: { id: productId },
	});

	return (
		<div className="flex flex-col">
			<p className="block w-full max-w-lg text-xs font-bold uppercase tracking-wide text-gray-700">
				Reviews:
			</p>
			{!product ? (
				<p>No data was found</p>
			) : product.reviews?.length === 0 ? (
				<p>This product does not have reviews yet</p>
			) : (
				<ul className="w-full">
					{product.reviews.map((review) => (
						<ProductReviewItem key={review.id} review={review} />
					))}
				</ul>
			)}
		</div>
	);
};

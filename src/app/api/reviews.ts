import { executeGraphql } from "./graphqlApi";
import {
	type ProductReviewFragment,
	ReviewCreateDocument,
	ReviewPublishDocument,
} from "@/gql/graphql";

export async function createReview(data: FormData, productId: string) {
	const newReview: ProductReviewFragment = {
		headline: data.get("headline")!.toString(),
		name: data.get("name")!.toString(),
		email: data.get("email")!.toString(),
		content: data.get("content")!.toString(),
		rating: Number(data.get("rating")!),
	};
	const id = await executeGraphql({
		query: ReviewCreateDocument,
		variables: {
			productId: productId,
			headline: newReview.headline,
			name: newReview.name,
			email: newReview.email,
			content: newReview.content,
			rating: newReview.rating,
		},
		cache: "no-store",
	});

	return id;
}

export async function publishReview(reviewId: string) {
	await executeGraphql({
		query: ReviewPublishDocument,
		variables: {
			reviewId: reviewId,
		},
		cache: "no-store",
	});
}

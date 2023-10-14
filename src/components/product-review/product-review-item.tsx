import { type ProductReviewFragment } from "@/gql/graphql";

export function ProductReviewItem({ review }: { review: ProductReviewFragment }) {
	// const isOptimistic = review.id.startsWith("-");

	return (
		<li className={`mt-4 w-full rounded-md border bg-gray-100 p-2 shadow-md`}>
			<div className="font-bold">
				<p className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-400">
					{review.headline === "none" ? "" : review.headline}
				</p>
				<p>
					{" "}
					<span>{review.name}</span> <span>rated: {review.rating} / 5</span>
				</p>
			</div>
			<p className="my-2 italic">{review.content}</p>
		</li>
	);
}

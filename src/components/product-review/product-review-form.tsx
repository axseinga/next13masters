import { revalidatePath } from "next/cache";
import { Input } from "../atoms/input";
import { createReview, publishReview } from "@/app/api/reviews";

type ProductReviewFormProps = {
	productId: string;
};

export const ProductReviewForm = ({ productId }: ProductReviewFormProps) => {
	const addNewReviewAction = async (_formData: FormData) => {
		"use server";

		const res = await createReview(_formData, productId);

		if (!res) {
			throw new Error("Something went wrong");
		}

		const id = res.createReview?.id;

		if (!id) {
			throw new Error("Unable to publish review.");
		}

		await publishReview(id);

		revalidatePath(`/product/${productId}`);
	};

	return (
		<form
			action={addNewReviewAction}
			noValidate
			className="flex w-full flex-col"
			data-testid="add-review-form"
		>
			<div className="flex flex-col">
				<Input
					name="headline"
					label="Headline"
					type="text"
					placeholder="Write title"
					variant="input"
				/>
				<Input
					name="content"
					label="Review"
					type="text"
					placeholder="Start writing review"
					variant="textarea"
				/>
				<Input name="rating" label="Rating" type="number" placeholder="5" variant="input" />
				<Input name="name" label="Name" type="text" placeholder="Your name" variant="input" />
				<Input name="email" label="email" type="email" placeholder="Your email" variant="input" />
			</div>
			<button
				type="submit"
				className="hover:bg-color-secondary text-color-primary border-color-secondary m-4 self-center rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white"
			>
				Add review
			</button>
		</form>
	);
};

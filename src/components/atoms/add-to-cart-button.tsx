"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { addToCartAction } from "@/app/product/[productId]/actions";

export const AddToCartButton = ({ productId }: { productId: string }) => {
	const { pending } = useFormStatus();

	return (
		<form>
			<button
				formAction={async () => {
					await addToCartAction(productId);
				}}
				type="submit"
				data-testid="add-to-cart-button"
				disabled={pending}
				className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white disabled:cursor-wait disabled:opacity-50"
			>
				Add to basket
			</button>
		</form>
	);
};

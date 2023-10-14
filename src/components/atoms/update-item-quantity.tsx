"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

export const UpdateProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="flex justify-center align-middle">
			<button
				disabled={optimisticQuantity === 1}
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
				className="ml-2 h-8 w-8 border bg-slate-50 disabled:cursor-not-allowed"
			>
				-
			</button>
			<span className="px-2">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="ml-2 h-8 w-8 border bg-slate-50"
			>
				+
			</button>
		</form>
	);
};

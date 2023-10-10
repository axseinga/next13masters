import { redirect } from "next/navigation";
import { getCartFromCookies, handlePaymentAction } from "@/app/api/cart";
import { formatCurrency } from "@/utils/utils";
import { IncrementProductQuantity } from "@/components/atoms/increment-item-quantity";
import { RemoveButton } from "@/components/atoms/remove-button";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="w-full">
			<p>Cart Summary</p>
			<br></br>
			<ul className="divide-y divide-gray-800">
				{cart.orderItems.map((item, index) => (
					<li key={`${index}_${item.id}`} className="py-4">
						<div className="flex justify-between">
							<div>{item.product?.name}</div>
							<div className="flex">
								<span>
									{item.product?.price && formatCurrency(item.product?.price / 100)} x{" "}
									<IncrementProductQuantity quantity={item.quantity} itemId={item.id} />
								</span>{" "}
								<RemoveButton itemId={item.id} />
							</div>
						</div>
					</li>
				))}
			</ul>
			<form action={handlePaymentAction}>
				<button
					type="submit"
					className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white"
				>
					Continue to payment
				</button>
			</form>
		</div>
	);
}

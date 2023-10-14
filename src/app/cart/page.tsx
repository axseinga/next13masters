import { redirect } from "next/navigation";
import { getCartFromCookies, handlePaymentAction } from "@/app/api/cart";
import { formatCurrency } from "@/utils/utils";
import { UpdateProductQuantity } from "@/components/atoms/update-item-quantity";
import { RemoveButton } from "@/components/atoms/remove-button";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	let totalItems = 0;
	cart.orderItems.forEach((item) => (totalItems = totalItems + item.quantity));

	return (
		<div className="w-full">
			<p>Cart Summary</p>
			<p data-testid="quantity">{totalItems}</p>
			<form>
				<button
					type="submit"
					data-testid="sort-by-price"
					className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white"
				>
					Sort by price
				</button>
			</form>
			<br></br>
			<ul className="divide-y divide-gray-800">
				{cart.orderItems.map((item, index) => (
					<li key={`${index}_${item.id}`} className="py-4">
						<div className="flex justify-between">
							<div>{item.product?.name}</div>
							<div className="flex">
								<div>
									<span data-testid="product-price">
										{item.product?.price && formatCurrency(item.product?.price / 100)}
									</span>
									x
									<UpdateProductQuantity quantity={item.quantity} itemId={item.id} />
								</div>
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

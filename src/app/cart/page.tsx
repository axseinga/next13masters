import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/app/api/cart";
import { formatCurrency } from "@/utils/utils";
import { IncrementProductQuantity } from "@/components/atoms/increment-item-quantity";

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
									{item.product?.price && formatCurrency(item.product?.price / 100)} x <IncrementProductQuantity quantity={item.quantity} itemId={item.id}/>
								</span>{" "}
								<button className="text-color-primary hover:text-color-secondary ml-4 bg-transparent text-xs font-semibold">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-5 w-5"
										aria-label="Remove element"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
										/>
									</svg>
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			<button className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white">
				Confirm order
			</button>
		</div>
	);
}
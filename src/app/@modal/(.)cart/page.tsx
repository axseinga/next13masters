import { getCartFromCookies } from "@/app/api/cart";
import { ModalOverlay } from "@/components/atoms/modal-overlay";

export default async function ModalCart() {
	const cart = await getCartFromCookies();

	return (
		<>
			<ModalOverlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-screen-sm bg-white">
				{cart && cart.orderItems.map((item, index) => <li key={index}>{item.product?.name}</li>)}
			</div>
		</>
	);
}

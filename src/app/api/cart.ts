import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import {
	CartAddProductDocument,
	CartCreateDocument,
	type CartFragment,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}
	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}
	return cart.createOrder;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql(CartGetByIdDocument, { id: cartId });
		if (cart.order) {
			return cart.order;
		}
	}
}

export function createCart() {
	return executeGraphql(CartCreateDocument, {});
}
export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: productId });
	if (!product) {
		throw new Error("Product not found");
	}
	await executeGraphql(CartAddProductDocument, {
		orderId,
		productId,
		total: product.price,
	});
}

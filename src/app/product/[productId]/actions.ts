"use server";

import { revalidateTag } from "next/cache";
import { addToCart, getOrCreateCart } from "@/app/api/cart";

export const addToCartAction = async (productId: string) => {
    const cart = await getOrCreateCart();
    await addToCart(cart.id, productId);

    revalidateTag("cart");
};
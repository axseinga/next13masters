"use server";

import { revalidatePath } from "next/cache";
import { executeGraphql } from "../api/graphqlApi";
import { CartRemoveProductDocument, CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	"use server";

	await executeGraphql({
		query: CartSetItemQuantityDocument,
		variables: { itemId, quantity },
	});
	revalidatePath("/cart");
};

export const RemoveItem = (itemId: string) => {
	return executeGraphql({ query: CartRemoveProductDocument, variables: { itemId } });
};

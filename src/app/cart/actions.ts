"use server";

import { executeGraphql } from "../api/graphqlApi";
import { CartRemoveProductDocument, CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({ query: CartSetItemQuantityDocument, variables: { itemId, quantity } });
};

export const RemoveItem = (itemId: string) => {
	return executeGraphql({ query: CartRemoveProductDocument, variables: { itemId } });
};

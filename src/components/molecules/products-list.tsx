import Link from "next/link";
import { ProductListItem } from "@/components/molecules/product-list-item";
import type { ProductListItemT } from "@/types";

export const ProductsList = async ({ products }: { products: ProductListItemT[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => {
				return (
					<Link key={product.id} href={`/product/${product.id}`}>
						<li className="border-2 shadow-xl">
							<ProductListItem data={product} />
						</li>
					</Link>
				);
			})}
		</ul>
	);
};

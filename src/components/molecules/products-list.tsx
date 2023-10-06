import Link from "next/link";
import { ProductListItem } from "@/components/molecules/product-list-item";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductsList = async ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => {
				return (
					<li key={product.id} className="border-2 shadow-xl">
						<Link href={`/product/${product.id}`}>
							<ProductListItem data={product} />
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

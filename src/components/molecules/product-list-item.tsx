import { ProductCoverImage } from "../atoms/product-cover-image";
import { type ProductListItemFragment } from "@/gql/graphql";
import { formatCurrency } from "@/utils/utils";

type ProductListItemProps = {
	data: ProductListItemFragment;
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
	return (
		<div className="h-full">
			<div className="bg-white">
				<ProductCoverImage src={data.images[0].url} alt={data.name} />
			</div>
			<div className="h-30 m-4 flex flex-col justify-evenly gap-3">
				<div className="flex justify-between">
					<h3>{data.name}</h3>
					<span>{formatCurrency(data.price / 100)}</span>
				</div>
				<button className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white">
					Add to basket
				</button>
			</div>
		</div>
	);
};

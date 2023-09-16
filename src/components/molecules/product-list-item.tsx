import { ProductCoverImage } from "../atoms/product-cover-image";
import type { ProductListItemT } from "@/types";
import { formatCurrency } from "@/utils/utils";

type ProductListItemProps = {
	data: ProductListItemT;
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
	return (
		<div className="h-full">
			<div className="bg-white">
				<ProductCoverImage src={data.image.url} alt={data.image.alt} />
			</div>
			<div className="m-4 flex flex-col gap-3">
				<p className="flex justify-between">
					<h3>{data.title}</h3>
					<span>{data.review_score}</span>
				</p>
				<p>{formatCurrency(data.price / 100)}</p>
				<p className="text-sm">{data.description}</p>
				<button className="rounded border border-slate-600 bg-transparent px-4 py-2 font-semibold text-slate-600 hover:border-transparent hover:bg-slate-600 hover:text-white">
					Add to basket
				</button>
			</div>
		</div>
	);
};

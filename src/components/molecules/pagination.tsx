import { ActiveLink } from "../atoms/active-link";

export const Pagination = async () => {
	const pages = Array.from({ length: 10 }, (_, i) => i + 1);
	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 sm:px-0">
			<div className="hidden w-full justify-center md:-mt-px md:flex">
				{pages?.map((item, index) => (
					<ActiveLink
						key={index}
						href={`/products/${index + 1}`}
						className="inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
						activeClassName="border-black text-black"
					>
						{item}
					</ActiveLink>
				))}
			</div>
		</div>
	);
};

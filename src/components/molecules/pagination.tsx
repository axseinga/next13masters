import { ActiveLink } from "../atoms/active-link";

export const Pagination = async ({
	category,
	pagesCount,
}: {
	category?: string;
	pagesCount: number;
}) => {
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 sm:px-0">
			<ul className="hidden w-full justify-center md:-mt-px md:flex" aria-label="pagination">
				{pages?.map((item, index) => (
					<li key={index}>
						<ActiveLink
							href={category ? `/products/categories/${category}/${index + 1}` : `/products/${index + 1}`}
							className="inline-flex items-center border-t-2 border-transparent px-4 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							activeClassName="bg-slate-600 text-white"
							exact
						>
							{item}
						</ActiveLink>
					</li>
				))}
			</ul>
		</div>
	);
};

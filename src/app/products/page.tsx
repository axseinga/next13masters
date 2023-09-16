import { ProductListItem } from "@/components/molecules/product-list-item";

export default function Products() {
	const data = [
		{
			id: "14d96d3e-0755-45cc-91ff-09c7ea276f01",
			title: "Modern Coffee Table",
			description: "A sleek and stylish coffee table for your living room.",
			price: 19999,
			review_score: 4.5,
			image: {
				url: "/assets/temp/cofee-table.webp",
				alt: "Modern Coffee Table"
			}
		},
		{
			id: "2839f15b-9f67-4eae-8c05-5d158b6b3a12",
			title: "Cozy Throw Blanket",
			description: "Stay warm and comfortable with this soft throw blanket.",
			price: 2999,
			review_score: 4.8,
			image: {
				url: "/assets/temp/throw-blanket.webp",
				alt: "Modern Coffee Table"
			}
		},
		{
			id: "3c26c1f4-3784-4e1b-8ff6-7b3ca4e1d5e2",
			title: "Vintage Table Lamp",
			description: "Add a touch of nostalgia to your home with this vintage table lamp.",
			price: 5999,
			review_score: 4.2,
			image: {
				url: "/assets/temp/table-lamp.webp",
				alt: "Vintage Table Lamp"
			}
		},
		{
			id: "47b3525a-9263-4d70-9e1c-9f8384857e67",
			title: "Soft Cushion Set",
			description: "Upgrade your sofa with these beautiful, plush cushions.",
			price: 4999,
			review_score: 4.6,
			image: {
				url: "/assets/temp/cushion.webp",
				alt: "Soft Cushion Set"
			}
		},
	];

	return (
		<main>
			<ul data-testid="products-list" className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data?.map((product) => {
					return (
						<li key={product.id} className="border-2 shadow-xl">
							<ProductListItem
								data={product}
							/>
						</li>
					);
				})}
			</ul>
		</main>
	);
}

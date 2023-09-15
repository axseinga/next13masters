export type ProductListItemT = {
	id: string;
	title: string;
	description: string;
	price: number;
	review_score: number;
	image: {
		url: string;
		alt: string;
	};
};
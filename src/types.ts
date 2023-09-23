export type ProductResponseItemT = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

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
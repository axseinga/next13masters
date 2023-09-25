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
	name: string;
	description: string;
	price: number;
	images: {
		url: string;
	}[]
};
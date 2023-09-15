export const formatCurrency = (amout: number) => {
	return new Intl.NumberFormat("gb-GB", {
		style: "currency",
		currency: "GBP",
	}).format(amout);
};

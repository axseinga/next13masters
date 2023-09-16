export default function ProductPage({ params, searchParams }: { params: { productId: string }; searchParams: {[key: string]: string | string[]} }) {
    const referral = searchParams.referral.toString();
	return (
		<main>
			<div>
				<h1>{params.productId}</h1>
                <h2>{referral}</h2>
			</div>
		</main>
	);
}

import { ImageResponse } from "next/server";
import { executeGraphql } from "../../api/graphqlApi";
import { ProductGetImageDocument } from "@/gql/graphql";

export const runtime = "edge";

export const contentType = "image/png";

export const size = {
	width: 1200,
	height: 630,
};

export default async function OpenGraphImage({ params }: { params: { productId: string } }) {
	const { product } = await executeGraphql({
		query: ProductGetImageDocument,
		variables: { id: params.productId },
	});

	const img = product?.images?.[0]?.url ?? "/assets/shop-logo.png";

	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full w-full h-full flex flex-col items-center justify-center gap-16 p-20"
				style={{
					background: `
            linear-gradient(
              90deg,
              rgb(192, 171, 155) 0%,
              rgb(129, 129, 129) 20%,
              rgb(148, 148, 148) 80%,
              rgb(192, 171, 155) 100%
            )`,
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[50px] leading-10">Next13Masters</p>
				<p tw="font-serif m-0 p-0 font-black">{product?.name ?? ""}</p>
				<p tw="m-0 mt-2">{product?.description ?? ""}</p>
				<img tw="w-1/5 h-2/5" src={img} alt={`${product?.name ?? ""} - Open Graph Image`} />
			</div>
		),
	);
}

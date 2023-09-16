import Image from "next/image";

type ProductCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md">
			<Image
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105 cursor-pointer"
				priority
			/>
		</div>
	);
};

import { ProductReviewForm } from "./product-review-form";
import { ProductReviewList } from "./product-review-list";

interface ProductReviewContainerProps {
  productId: string;
}

export const ProductReviewContainer = ({
  productId,
}: ProductReviewContainerProps) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <ProductReviewList productId={productId} />
      <ProductReviewForm productId={productId} />
    </div>
  );
};

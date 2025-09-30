import { redirect } from "next/navigation";
import React from "react";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }

  return (
    <div>
      <h1>
        Review {reviewId} for product "{productId}"
      </h1>
    </div>
  );
};

export default ReviewDetails;

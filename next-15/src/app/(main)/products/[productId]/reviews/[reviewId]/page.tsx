import { notFound } from 'next/navigation';
import React from 'react';

const ReviewDetails = async ({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {
    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    
    return (
        <div>
            <h1>Review {reviewId} for product "{productId}"</h1>
        </div>
    );
};

export default ReviewDetails;
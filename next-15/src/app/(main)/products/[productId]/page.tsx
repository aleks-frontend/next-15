import { Metadata } from 'next';
import React from 'react';

interface Props {
    params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const productId = (await params).productId;
    return {
        title: `Product ${productId}`,
        description: `Details about product ${productId}`,
    }
}

const ProductDetails = async ({ params }: Props) => {
    const productId = (await params).productId;
    
    return (
        <div>
            Details about product {productId}
        </div>
    );
};

export default ProductDetails;
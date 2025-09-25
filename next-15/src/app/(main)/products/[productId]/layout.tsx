import Link from 'next/link';
import React from 'react';

const ProductDetailLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Link href="/products">Back to products</Link>
            <hr />
            {children}
            <h3>Featured products</h3>
            <ul>
                <li>Product A</li>
                <li>Product B</li>
                <li>Product C</li>
            </ul>
        </div>
    );
};

export default ProductDetailLayout;
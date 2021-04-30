import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://sheltered-everglades-23184.herokuapp.com/product/'+ productKey)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [productKey])
    document.title = "Product Detail";

    return (
        <div>
            <h1>{productKey} Detail coming soon !</h1>
            {!product ? (
                <p>loading...</p>
            ) : (
                <Product showAddToCart={false} product={product}></Product>
            )}
        </div>
    );
};

export default ProductDetail;
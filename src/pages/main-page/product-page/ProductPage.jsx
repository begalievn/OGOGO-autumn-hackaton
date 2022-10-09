// modules
import React from 'react';

// components
import ProductInfo from "./components/product-info/ProductInfo";

// styles
import classes from './productPage.module.scss';

const ProductPage = () => {
    return (
        <div className={classes.container}>
            <ProductInfo />
        </div>
    );
};

export default ProductPage;

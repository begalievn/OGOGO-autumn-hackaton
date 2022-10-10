// modules
import React from 'react';

// components
import ProductCard from "../../../../../components/product-card/ProductCard";

// styles
import classes from './similarProducts.module.scss';

const SimilarProducts = () => {
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>Похожие продукты</h3>
            <div className={classes.content}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default SimilarProducts;

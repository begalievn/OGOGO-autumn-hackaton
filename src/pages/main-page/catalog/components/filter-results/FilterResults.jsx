// modules
import React from 'react';

// styles
import classes from './filterResults.module.scss';
import ProductCard from "../../../../../components/product-card/ProductCard";


const FilterResults = () => {
    return (
        <div className={classes.container}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>
    );
};

export default FilterResults;

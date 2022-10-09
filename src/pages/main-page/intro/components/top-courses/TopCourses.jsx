// modules
import React from 'react';

// styles
import classes from './topCourses.module.scss';
import ProductCard from "../../../../../components/product-card/ProductCard";

const TopCourses = () => {
    return (
        <div className={classes.container}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default TopCourses;

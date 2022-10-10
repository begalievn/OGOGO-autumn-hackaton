// modules
import React from 'react';

// components
import ProductInfo from "./components/product-info/ProductInfo";

// styles
import classes from './productPage.module.scss';
import SimilarProducts from "./components/similar-products/SimilarProducts";
import CourseMap from "./components/course-map/CourseMap";

const ProductPage = () => {
    return (
        <div className={classes.container}>
            <ProductInfo />
            <SimilarProducts />
            <CourseMap />
        </div>
    );
};

export default ProductPage;

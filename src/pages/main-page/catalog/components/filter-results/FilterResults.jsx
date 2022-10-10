// modules
import React from 'react';

// styles
import classes from './filterResults.module.scss';
import ProductCard from "../../../../../components/product-card/ProductCard";
import {Pagination} from "@mui/material";


const FilterResults = ({ courses }) => {
    return (
            <div className={classes.container}>
                {
                    courses.map((item, index) => (
                        <div key={index}>
                            <ProductCard data={item} />
                        </div>
                    ))
                }
            </div>
        
    );
};

export default FilterResults;

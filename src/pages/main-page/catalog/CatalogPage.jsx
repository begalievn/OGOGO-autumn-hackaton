// modules
import React from 'react';

// components
import FilterOptions from "./components/filter-options/FilterOptions";
import FilterResults from "./components/filter-results/FilterResults";

// styles
import classes from './catalogPage.module.scss';

const CatalogPage = () => {
    return (
        <div className={classes.container}>
            <FilterOptions />
            <FilterResults />
        </div>
    );
};

export default CatalogPage;

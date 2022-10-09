// modules
import React from 'react';

// styles
import classes from './productInfo.module.scss';

const ProductInfo = () => {
    return (
        <div className={classes.container}>
            <div className={classes.about_product}>
                <div className={classes.title}>
                    <h1 className={classes.main_title}>Python</h1>
                    <h2 className={classes.company_name}>OGOGO Academy</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;

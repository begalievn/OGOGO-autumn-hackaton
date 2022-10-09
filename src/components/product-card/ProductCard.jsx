// modules
import React from 'react';

// assets
import { defaultProductImage } from '../../assets/images';
import { star } from '../../assets/icons';

// styles
import classes from './productCard.module.scss';

const ProductCard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.top_rating_flag}>
                <p>Топ рейтинга</p>
            </div>
            <div className={classes.image}>
                <img src={defaultProductImage} alt={"defaultProductImage"} />
            </div>
            <div className={classes.content}>
                <div className={classes.first}>
                    <h4 className={classes.title}>Python</h4>
                    <div className={classes.star_container}>
                        <span className={classes.star_number}>50</span>
                        <img className={classes.star_icon} src={star} alt="star" />
                    </div>
                </div>
                <div className={classes.second}>
                    <p className={classes.description}>Description</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

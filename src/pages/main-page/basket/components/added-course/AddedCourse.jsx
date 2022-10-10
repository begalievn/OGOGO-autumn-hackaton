// modules
import React from 'react';

// assets
import { ogogoImage } from '../../../../../assets/images';

// styles
import classes from './addedCourse.module.scss';

const AddedCourse = ({ data }) => {
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.logo}>
                    <img src={ogogoImage} alt="company image" />
                </div>
                <div className={classes.title}>
                    <h3>{data?.company}</h3>
                    <p>{data?.name}</p>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.price}>
                    {data?.price} сом/мес
                </div>
                <div>
                    <button className={classes.register}>
                        Записаться
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default AddedCourse;

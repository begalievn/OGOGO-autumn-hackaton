// modules
import React from 'react';

// assets
import { map } from '../../../../../assets/images';

// styles
import classes from './courseMap.module.scss';

const CourseMap = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                Найти нас по карте
            </h2>
            <img src={map} alt={"map"} />
        </div>
    );
};

export default CourseMap;

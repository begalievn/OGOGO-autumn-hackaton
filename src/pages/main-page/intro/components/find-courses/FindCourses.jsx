// modules
import React from 'react';

// assets
import { bg1, bg2, bg3, bg4, bg5, bg6 } from '../../../../../assets/images';

// styles
import classes from './findCourses.module.scss';

const coursesList = [
    {
        text: 'IT',
        image: bg1
    },
    {
        text: 'ЯЗЫКИ',
        image: bg2,
    },
    {
        text: 'МАРЕКЕТИНГ',
        image: bg3
    },
    {
        text: 'ПОДГОТОВКА К ОРТ',
        image: bg4
    },
    {
        text: 'РЕПЕТИТОР',
        image: bg5
    },
    {
        text: 'ДЕТЯМ',
        image: bg6
    }
]

const FindCourses = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <h1 className={classes.header}>
                    Найди курсы для себя
                </h1>
                <p className={classes.categories_text}>Категории</p>
            </div>
            <div className={classes.categories}>
                {
                    coursesList.map((item, index) => (
                        <div className={classes.course_item}>
                            <img src={item.image} alt="bg" />
                            <p className={classes.text}>{item.text}</p>
                        </div>
                    ))
                }
            </div>
            
            
        </div>
    );
};

export default FindCourses;

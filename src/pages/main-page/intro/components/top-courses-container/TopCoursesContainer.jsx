// modules
import React from 'react';
import {useNavigate} from "react-router-dom";

// components
import TopCourses from "../top-courses/TopCourses";

// styles
import classes from './topCoursesContainer.module.scss';

const TopCoursesContainer = () => {
    const navigate = useNavigate();
    
    const handleGotoCatalog = () => {
        navigate(`/catalog`);
    }
    
    
    
    return (
        <div className={classes.container}>
            <div className={classes.course_list}>
                <TopCourses />
            </div>
            <div className={classes.courses_description}>
                <div>
                    <p className={classes.title_description}>
                        Доступные курсы
                    </p>
                    <h2 className={classes.title}>Топ курсы по <br /> нашему рейтингу</h2>
                </div>
                <div>
                    <p className={classes.description_text}>Описание</p>
                    <button onClick={handleGotoCatalog} className={classes.goto_catalog}>Смотреть каталог</button>
                </div>
            </div>
        </div>
    );
};

export default TopCoursesContainer;

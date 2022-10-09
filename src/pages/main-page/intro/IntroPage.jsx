// modules
import React from 'react';

// components
import Introduction from "./components/introduction/Introduction";

// styles
import classes from './introPage.module.scss';
import TopCoursesContainer from "./components/top-courses-container/TopCoursesContainer";
import FindCourses from "./components/find-courses/FindCourses";

const IntroPage = () => {
    return (
        <div className={classes.container}>
            <div>
                <Introduction />
            </div>
            <div>
                <TopCoursesContainer />
            </div>
            <div>
                <FindCourses />
            </div>
        </div>
    );
};

export default IntroPage;

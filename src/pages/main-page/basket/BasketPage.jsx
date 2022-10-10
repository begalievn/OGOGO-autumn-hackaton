// modules
import React from 'react';
import {useSelector} from "react-redux";

// components
import AddedCourse from "./components/added-course/AddedCourse";


// styles
import classes from './basketPage.module.scss';

const BasketPage = () => {
    const coursesInBasket = useSelector((state) => state.auth.productsInBasket)
    console.log("coursesInBasket", coursesInBasket);
    
    return (
        <div className={classes.container}>
            {
                coursesInBasket.map((item) => (
                    <AddedCourse data={item} />
                ))
            }
            
            <div className={classes.block}>
            </div>
        </div>
    );
};

export default BasketPage;

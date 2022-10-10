// modules
import React from 'react';

// assets
import {greenStar} from '../../../../../assets/icons';
import {defaultProductImage} from '../../../../../assets/images'

// styles
import classes from './productInfo.module.scss';
import {useSelector} from "react-redux";

const starsCount = [
    greenStar,
    greenStar,
    greenStar,
    greenStar,
    greenStar
]

const ProductInfo = () => {
    const course = useSelector((state) => state.auth.selectedCourse);
    
    return (
        <div className={classes.container}>
            <div className={classes.about_product}>
                <div className={classes.title}>
                    <h1 className={classes.main_title}>{course.name || `Python`}</h1>
                    <h2 className={classes.company_name}>{course.company || `OGOGO Academy`}</h2>
                </div>
                <div className={classes.description}>
                    <p className={classes.description_text}>
                        {
                            course.description || `Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nam mollis, justo nec porttitor auctor,
                        erat sapien faucibus lectus, vel tempor dolor augue et lectus.
                    `
                        }
                    </p>
                    <p className={[classes.address, classes.description].join(" ")}>
                        {course?.adress || `Адрес: Ибраимова 115/а`}
                    </p>
                </div>
                <p className={classes.price}>
                    {course.price || 5000} сом
                </p>
                <div className={classes.rating}>
                    <p className={classes.rating_text}>Рейтинг</p>
                    <div className={classes.stars}>
                        {
                            starsCount.map((item) => (
                                <img src={item} alt="star"/>
                            ))
                        }
                    </div>
                    <p className={classes.rating_quantity}>
                        (28)
                    </p>
                </div>
                <div className={classes.register}>
                    <button className={classes.register_button}>Записаться</button>
                </div>
            </div>
            <div className={classes.product_right}>
                <img src={defaultProductImage} className={classes.product_image} alt="product-image"/>
                <button className={classes.vacancy_button}>Доступна вакансия преподавателя</button>
            </div>
        </div>
    );
};

export default ProductInfo;

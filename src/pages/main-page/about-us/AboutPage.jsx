// modules
import React from 'react';
import {useNavigate} from "react-router-dom";

// assets
import { imageIn, aboutImage2 } from '../../../assets/images';

// styles
import classes from './aboutPage.module.scss';

const AboutPage = () => {
    const navigate = useNavigate();
    const handleFindCourse = () => {
        navigate("/catalog");
    }
    
    return (
        <div className={classes.container}>
            <h1 className={classes.main_title}>О нас</h1>
            <p className={classes.description}>
                Здесь каждое образовательное учреждение может разместить свои обучающие программы и курсы. Главная цель сервиса — помочь обычным пользователям быстро найти нужную образовательную программу.
            </p>
            
            <div className={classes.second}>
                <div className={classes.left}>
                    <h2 className={classes.h2}>
                        Ищите курсы?
                    </h2>
                    <h3 className={classes.h3}>
                        Используйте нашу площадку!
                    </h3>
                    <p className={classes.text2}>
                        Экономите время и получаете кэшбек
                    </p>
                    
                    <button onClick={handleFindCourse} className={classes.find_courses}>
                        Найти курсы
                    </button>
                </div>
                <div className={classes.right}>
                    <img src={imageIn} alt="" />
                </div>
            </div>
            <div className={classes.third}>
                <div className={classes.left}>
                    <img src={aboutImage2} alt="" />
                </div>
                <div className={classes.right}>
                    <p className={classes.text1}>
                        Вы владеете бизнесом в сфере образования или являетесь частным репетитором?
                    </p>
                    
                    <button className={classes.add_course}>
                        Добавить свои курсы
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

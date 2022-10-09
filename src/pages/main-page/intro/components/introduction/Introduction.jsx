// modules
import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from 'axios';

// redux
import { openLoginModal, openRegisterModal } from "../../../../../store/features/auth/authSlice";

// assets
import {
    introImage
} from '../../../../../assets/images';

import {
    playIcon
} from '../../../../../assets/icons';

// styles
import classes from './introduction.module.scss';

const Introduction = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    
    const handleRegisterClick = () => {
        console.log("Register");
        dispatch(openRegisterModal());
    }
    
    const handleGoToCatalog = (event) => {
        event.preventDefault();
        navigate(`/catalog`);
    }
    
    
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <h1 className={classes.title}>
                    Let's Find the <br/> Right <span>Course</span> For You
                </h1>
    
                <p className={classes.paragraph}>С нами находить курсы легче</p>
                
                <div className={classes.actions}>
                    <div className={classes.buttons}>
                        <button onClick={handleRegisterClick}>
                            Зарегистрироваться
                        </button>
                        <div onClick={handleGoToCatalog} className={classes.catalog_button}>
                            <img src={playIcon} alt="playIcon" />
                            <p>Перейти к каталогу</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={classes.right}>
                <img src={introImage} alt="introImage"  />
            </div>
        </div>
    );
};

export default Introduction;

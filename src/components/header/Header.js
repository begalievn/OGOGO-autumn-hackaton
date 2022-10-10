// modules
import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

// constants
import { navOptions } from "../../utils/constants/header-constants";

// hooks

// redux
import { openLoginModal, openRegisterModal } from "../../store/features/auth/authSlice";

// assets
import { mainLogo, userAuth, greenUserIcon } from '../../assets/icons';

import classes from './header.module.scss';


const Header = () => {
    const dispatch = useDispatch();
    const [activeOption, setActiveOption] = useState("/");
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.auth.user);
    
    console.log("user in Header", user);
    
    useEffect(() => {
        let route = location.pathname.split('/')[1] || "/";
        setActiveOption(route);
        window.scrollTo(0, 0);
    }, [location.pathname])
    
    const handleOptionsClick = (item) => {
        navigate(`${item.route}`);
        setActiveOption(item.route);
    }
    
    const handleLoginClick = () => {
        dispatch(openLoginModal());
    }
    
    const handleRegisterClick = () => {
        dispatch(openRegisterModal());
    }
    
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={mainLogo} alt="logo" />
            </div>
            <div className={classes.options}>
                {
                    navOptions.map((item, index) => (
                        <div key={index}>
                            <p className={activeOption === item.route ? classes.active : ""} onClick={() => handleOptionsClick(item)} >{item?.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className={classes.auth}>
                {
                    user ? (
                        <div className={[classes.login, classes.user].join(" ")} onClick={handleLoginClick}>
                            <img src={greenUserIcon} alt={"userAuth"} />
                            <p>{ user }</p>
                        </div>
                    ) : (
                        <>
                            <div className={classes.login} onClick={handleLoginClick}>
                                <img src={greenUserIcon} alt={"userAuth"} />
                                <p>Войти</p>
                            </div>
                            <div className={classes.register} onClick={handleRegisterClick}>
                                <p>Регистрация</p>
                            </div>
                        </>
                    )
                }
               
                
            </div>
        </div>
    );
};

export default Header;

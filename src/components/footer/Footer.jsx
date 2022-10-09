// modules
import React from 'react';
import {useNavigate} from "react-router-dom";

// assets
import { mainLogo, facebook, twitter, linkedin, instagram } from '../../assets/icons';

// styles
import classes from './footer.module.scss';

const socialMedias = [
    facebook, twitter, linkedin, instagram
];

const footerOptions = [
    {
        text: "Главная",
        route: "/"
    },
    {
        text: "Каталог",
        route: "/catalog"
    },
    {
        text: 'О нас',
        route: '/about',
    },
    {
        text: "Корзина",
        route: "/basket"
    }
]



const Footer = () => {
    const navigate = useNavigate();
    
    const handleOptionClick = (item) => {
        navigate(`${item.route}`);
    }
    
    return (
        <div className={classes.container}>
            <div className={classes.container2}>
                <div className={classes.info}>
                    <div className={classes.logo}>
                        <img src={mainLogo} alt="mainLogo" />
                    </div>
                    <div className={classes.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                        Nam mollis, justo nec porttitor auctor, <br/>
                        erat sapien faucibus lectus, vel tempor dolor augue et lectus.
                    </div>
    
                </div>
                <div className={classes.options}>
                    <h4 className={classes.options_title}>Навигация</h4>
                    <div className={classes.column}>
                        {
                            footerOptions.map((item) => (
                                <p onClick={() => handleOptionClick(item)} className={classes.options_item}>{item.text}</p>
                            ))
                        }
                    </div>
                </div>
    
                <div className={classes.connect}>
                    <h4 className={classes.options_title}>Связаться</h4>
                    <div>
                        <p className={classes.options_item}>courses@gmail.com</p>
                        <p className={classes.options_item}>+996777777777</p>
                    </div>
                    <div className={classes.social_media_icons} >
                        {
                            socialMedias.map((icon) => (
                                <div className={classes.social_media_div}>
                                    <img src={icon} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;

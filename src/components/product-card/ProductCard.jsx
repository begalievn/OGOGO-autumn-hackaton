// modules
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

// redux
import {openLoginModal, setProductToBasket, setSelectedCourse} from '../../store/features/auth/authSlice';

// assets
import { defaultProductImage } from '../../assets/images';
import { basketIcon } from '../../assets/icons';

// styles
import classes from './productCard.module.scss';
import {useNavigate} from "react-router-dom";


const ProductCard = ({data}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    
    const handleBasketClick = (data) => {
        if(user) {
            dispatch(setProductToBasket(data));
        } else {
            dispatch(openLoginModal());
        }
    }
    
    const handleCardClick = (data) => {
        dispatch(setSelectedCourse(data));
        navigate(`/catalog/${data.id}`);
    }
    
    if(!data) {
        return (
            <div className={classes.container}>
                <div className={classes.top_rating_flag}>
                    <p>Топ рейтинга</p>
                </div>
                <div className={classes.image}>
                    <img src={defaultProductImage} alt={"defaultProductImage"} />
                </div>
                <div className={classes.content}>
                    <div className={classes.first}>
                        <h4 className={classes.title}>Python</h4>
                        <div className={classes.star_container}>
                            <span className={classes.star_number}>50</span>
                            <img className={classes.star_icon} src={ basketIcon } alt="star" />
                        </div>
                    </div>
                    <div className={classes.second}>
                        <p className={classes.description}>Description</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={classes.container} onClick={() => handleCardClick(data)}>
            {/*<div className={classes.top_rating_flag}>*/}
            {/*    <p>Топ рейтинга</p>*/}
            {/*</div>*/}
            <div className={classes.image}>
                <img src={defaultProductImage} alt={"defaultProductImage"} />
            </div>
            <div className={classes.content}>
                <div className={classes.first}>
                    <h4 className={classes.title}>{data.name.substring(0, 8)}{data.name.length > 6 ? '...' : ''}</h4>
                    <div className={classes.star_container}>
                        <span className={classes.star_number}>{data.price}</span>
                        <img onClick={() => handleBasketClick(data)} className={classes.star_icon} src={ basketIcon } alt="star" />
                    </div>
                </div>
                <div className={classes.second}>
                    <p className={classes.description}>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

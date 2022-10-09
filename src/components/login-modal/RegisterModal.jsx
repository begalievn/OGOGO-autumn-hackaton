// modules
import React from 'react';
import {Box, Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

// redux
import {closeRegisterModal, openLoginModal} from "../../store/features/auth/authSlice";

// api
import { registerUser } from "../../api/auth-api";

// assets
import {mainLogo, passwordIcon} from '../../assets/icons';
import {chelovechek} from '../../assets/images';

// style
import classes from './loginModal.module.scss';

const RegisterModal = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        registerUser(data);
        console.log(data)
    };
    
    const isRegisterModalOpen = useSelector(state => state.auth.isRegisterModalOpen);
    
    const handleCloseModal = () => {
        dispatch(closeRegisterModal());
    }
    
    const handleLoginClick = () => {
        dispatch(closeRegisterModal());
        dispatch(openLoginModal());
    }
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '700px',
        background: '#fff',
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: 24,
    }
    
    return (
        <Modal
            open={isRegisterModalOpen}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={style}>
                <div className={classes.container}>
                    <div className={classes.close} onClick={handleCloseModal}></div>
                    <div className={classes.logo}>
                        <img src={mainLogo}/>
                    </div>
                    <div className={classes.man}>
                        <img src={chelovechek}/>
                    </div>
                    <div className={classes.content}>
                        <h3 className={classes.title}>Создать Аккаунт</h3>
                        <div className={classes.form_container}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder={"Username"}
                                       className={[classes.input, classes.username].join(" ")} {...register("username", {required: true})} />
                                <br />
                                {errors.username &&
                                    <span className={classes.warn_message}>Поля объязательны к заполнению</span>}
                                <input placeholder={"Email Address"}
                                       className={[classes.input, classes.email].join(" ")} {...register("email", {required: true})} />
                                <br />
                                {errors.email &&
                                    <span className={classes.warn_message}>Поля объязательны к заполнению</span>}
                                {/* include validation with required or other standard HTML validation rules */}
                                <input placeholder={"Password"} type={'password'}
                                       className={[classes.input, classes.password].join(" ")} {...register("password", {required: true})}  />
                                <img src={passwordIcon} alt="passwordIcon" className={classes.password_eye_icon_register}/>
                                {/* errors will return when field validation fails  */}
                                <br/>
                                {errors.password &&
                                    <span className={classes.warn_message}>Поля объязательны к заполнению</span>}
                                
                                <div className={classes.radio_group}>
                                    <div className={classes.radios}>
                                        <input className={classes.radio} type="radio" {...register("is_vendor", )} id="notVendor" value={false} checked={true}/>
                                        <label htmlFor="user">Я ищу курсы</label>
                                    </div>
    
                                    <div className={classes.radios}>
                                        <input className={classes.radio} type="radio" {...register("is_vendor", )} id="isVendor" value={true} />
                                        <label htmlFor="vendor">Я хочу разместить свои курсы</label>
                                    </div>
                                </div>
                                
                                
                                <button className={classes.submit} type="submit">
                                    Создать аккаунт
                                </button>
                                <p className={classes.suggest_text}>Уже есть аккаунт? <span
                                    className={classes.register_text} onClick={handleLoginClick}>Войти</span></p>
                            </form>
                            <p></p>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default RegisterModal;

// modules
import React from 'react';
import {Box, Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import jwt from 'jwt-decode';

// redux
import { closeLoginModal, openRegisterModal, setUser } from "../../store/features/auth/authSlice";

// api
import { login } from "../../api/auth-api";

// assets
import { mainLogo } from '../../assets/icons';
import { chelovechek } from '../../assets/images';

// style
import classes from './loginModal.module.scss';

const LoginModal = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        const result = await login(data);
        const decoded = jwt(result.data.access);
        dispatch(setUser(decoded.username));
        console.log(decoded.username);
        console.log("result", result.data.access);
        if(decoded.username) {
            dispatch(closeLoginModal());
        }
    };
    
    const isLoginModalOpen = useSelector(state => state.auth.isLoginModalOpen);
    
    const handleCloseModal = () => {
        dispatch(closeLoginModal());
    }
    
    const handleRegisterClick = () => {
        dispatch(closeLoginModal());
        dispatch(openRegisterModal());
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
                open={isLoginModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style}>
                    <div className={classes.container}>
                        <div className={classes.close} onClick={handleCloseModal}></div>
                        <div className={classes.logo}>
                            <img src={mainLogo} />
                        </div>
                        <div className={classes.man}>
                            <img src={chelovechek}  />
                        </div>
                        <div className={classes.content}>
                            <h3 className={classes.title}>?????????? ?? ??????????????</h3>
                            <div className={classes.form_container}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input placeholder={"Email Address/Username"} className={[classes.input, classes.username].join(" ")} {...register("username")} />
    
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <input placeholder={"Password"} type={'password'} className={[classes.input, classes.username].join(" ")} {...register("password", { required: true })} />
                                    {/* errors will return when field validation fails  */}
                                    <br />
                                    {errors.exampleRequired && <span className={classes.warn_message}>???????? ???????????????????????? ?? ????????????????????</span>}
                                    
                                    <button className={classes.submit} type="submit">
                                        ??????????
                                    </button>
                                    <p>?????? ????????????????? <span className={classes.register_text} onClick={handleRegisterClick}>????????????????????????????????????</span></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
    );
};

export default LoginModal;

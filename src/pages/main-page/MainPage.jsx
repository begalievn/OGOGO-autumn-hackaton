// modules
import React from 'react';
import {Routes, Route} from "react-router-dom";

// components
import Header from "../../components/header/Header";
import IntroPage from "./intro/IntroPage";
import CatalogPage from "./catalog/CatalogPage";
import AboutPage from "./about-us/AboutPage";
import BasketPage from "./basket/BasketPage";
import LoginModal from "../../components/login-modal/LoginModal";
import RegisterModal from "../../components/login-modal/RegisterModal";
import Footer from "../../components/footer/Footer";

// styles
import classes from './mainPage.module.scss';
import ProductCard from "../../components/product-card/ProductCard";
import ProductPage from "./product-page/ProductPage";

const MainPage = () => {
    return (
        <>
            <div className={classes.container}>
                <Header/>
                <div className={classes.content}>
                    <Routes>
                        <Route exact path="/" element={<IntroPage/>}/>
                        <Route path="/catalog" element={<CatalogPage/>}/>
                        <Route path="/catalog/:id" element={<ProductPage />} />
                        <Route path="/about" element={<AboutPage/>}/>
                        <Route path="/basket" element={<BasketPage/>}/>
                    </Routes>
                </div>
            </div>
            <Footer />
            <LoginModal/>
            <RegisterModal/>
        </>
    
    );
};

export default MainPage;

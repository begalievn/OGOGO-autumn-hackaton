import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    user: null,
    productsInBasket: [],
    selectedCourse: {},
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.isLoginModalOpen = true;
        },
        closeLoginModal: (state) => {
            state.isLoginModalOpen = false;
        },
        openRegisterModal: (state) => {
            state.isRegisterModalOpen = true;
        },
        closeRegisterModal: (state) => {
            state.isRegisterModalOpen = false;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setProductToBasket: (state, action) => {
            state.productsInBasket = [...state.productsInBasket, action.payload];
        },
        setSelectedCourse: (state, action) => {
            state.selectedCourse = action.payload;
        }
    }
});

export const { openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal, setUser, setProductToBasket, setSelectedCourse } = authSlice.actions;

export default authSlice.reducer;

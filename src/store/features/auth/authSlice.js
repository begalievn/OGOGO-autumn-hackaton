import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoginModalOpen: false,
    isRegisterModalOpen: false
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
        }
    }
});

export const { openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal } = authSlice.actions;

export default authSlice.reducer;

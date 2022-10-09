import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/main-page/MainPage";
import ErrorPage from "./pages/error-page/ErrorPage";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<MainPage/>}/>
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}

export default App;

import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/ManPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {} , [theme])}>
            <button onClick={toggleTheme}>sdfsdf</button>
            <Link to={'/'}>
                ДОМ
            </Link>
            <Link to={'/about'}>
                ЭБОУТ
            </Link>
            <Suspense fallback={<div>//load suka</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
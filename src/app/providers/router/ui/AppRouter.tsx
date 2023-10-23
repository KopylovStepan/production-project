import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/ManPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>//load suka</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({element,path})=>(
                        <Route key={path} path={path} element={(<div className="page-wrapper">{element}</div>)}/>
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Forecast } from './features/Forecast';
import Home from './features/Home';
import { Tracking } from './features/Tracking';

export const MainRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/Home' element = {<Home /> } />
                <Route path = '/Tracking' element = {<Tracking /> } />
                <Route path = '/Forecast' element = {<Forecast/> } />
            </Routes>
        </BrowserRouter>

    )
}
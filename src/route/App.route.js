import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import * as Pages from '../pages';
import {Home, Profile, Setting} from '../pages'

const AppRouting = () => {
    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path={'/home'} element={<Home />} />
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/setting'} element={<Setting />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting

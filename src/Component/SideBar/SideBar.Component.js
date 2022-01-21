import React from 'react';
import {Link} from 'react-router-dom';

import Home from '@mui/icons-material/Home'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Settings from '@mui/icons-material/Settings'


import style from "./SideBar.module.scss"

const SideBar = () => {
    return (
            <div className={style.container}> 
                <ul> 
                    <li>
                        <Link to="/home"> <Home /> </Link>
                    </li>
                    <li>
                        <Link to="/profile"> <AccountCircle /> </Link>
                    </li>
                    <li>
                        <Link to="/setting"> <Settings /> </Link>
                    </li>
                </ul>
            </div>
    )
}

export default SideBar

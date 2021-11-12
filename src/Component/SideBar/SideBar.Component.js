import React from 'react';
import Home from '@mui/icons-material/Home'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Settings from '@mui/icons-material/Settings'


import style from "./SideBar.module.scss"

const SideBar = () => {
    return (
            <div className={style.container}> 
                <ul> 
                    <li>
                        <Home />
                    </li>
                    <li>
                        <AccountCircle />
                    </li>
                    <li>
                        <Settings />
                    </li>
                </ul>
            </div>
    )
}

export default SideBar

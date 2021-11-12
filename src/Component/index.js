import React from 'react'
import SideBar from './SideBar/SideBar.Component'
import Header from './Header/Header.Component'

import style from "./Component.module.scss"


const index = () => {
    return (
        <div className={style.container}>
            <SideBar />
            <Header />
            
        </div>
    )
}

export default index

import React from 'react'
import Title from './Title/Title.Component'
import SearchBar from './SearchBar/SearchBar.Component'
import Profile from './Profile/Profile.Component'

import style from "./Header.module.scss"

const Header = () => {
    return (
        <div className={style.Header}>
            <Title />
            <SearchBar />
            <Profile />
        </div>
    )
}

export default Header

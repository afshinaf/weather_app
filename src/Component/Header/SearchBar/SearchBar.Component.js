import React from 'react'

import style from './SearchBar.module.scss'

const SearchBar = () => {
    return (
        <div className={style.searchBar}>
            <input 
                type="search"
                placeholder="search"
            />
        </div>
    )
}

export default SearchBar

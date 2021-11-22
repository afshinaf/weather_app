import React from 'react'
import style from './Title.module.scss'



const Title = () => {
    return (
        <div className={style.title}>
            <h1> Weather Forecast </h1>
            <h4> {new Date().toDateString()} </h4> 
        </div>
    )
}

export default Title

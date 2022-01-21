import React from 'react';
import * as Component from '../../Component'

import style from './Home.module.scss';

const Home = () => {

    return (
        <div className={style.screen}>
            <Component.Header />
            <div className={style.main}>
                <Component.SideBar />
                <div className={style.container}>
                    <div className={style.center}>
                        <div className={style.image}>
                            salaaaaaaaaaam
                        </div>
                        <div className={style.today}></div>
                        <div className={style.highlight}></div>
                    </div>
                    <div className={style.aside}>
                        <div className={style.mounth}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

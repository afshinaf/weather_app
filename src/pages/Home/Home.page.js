import React, {useEffect} from 'react';
import * as Component from '../../Component'

import style from './Home.module.scss';

const Home = () => {

    return (
        <div>
            <Component.Header />
            <Component.SideBar />
            <div className={style.container}>
                <div className={style.main}>
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
    )
}

export default Home

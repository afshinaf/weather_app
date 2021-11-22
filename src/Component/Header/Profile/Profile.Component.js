import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'

import style from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={style.profile}>
            <AccountCircle style={{color: "#00f"}}/>
            <p> Afshin </p>
        </div>
    )
}

export default Profile

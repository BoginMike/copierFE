import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { Avatar } from '@mui/material';

export default function Header() {

    const [username, setUsername] = useState('')
    const [profilePicture, setProfilePicture] = useState('')

    useEffect(() => {
        let token = localStorage.getItem('token')
        let decoded = jwt_decode(token);
        setUsername(decoded.username)
        setProfilePicture(decoded.profilePicture)
    }, [])

    return (
        <div className='app-header'>
            <h1>Hi {username}</h1>
            <Avatar src={process.env.REACT_APP_BASE_URL + '/image/' + profilePicture}/>
        </div>
    )
}

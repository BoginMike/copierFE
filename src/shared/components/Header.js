import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {

    const [username, setUsername] = useState('')
    const [profilePicture, setProfilePicture] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token')
        let decoded = jwt_decode(token);
        setUsername(decoded.username)
        setProfilePicture(decoded.profilePicture)
    }, [])

    function logout() {
        if (window.confirm("Are you sure want to logout?")) {
            localStorage.clear();
            navigate('/login')
        }

    }

    function showProfilePage(){
        navigate('/profile')
    }

    return (
        <div className='app-header'>
            <div>
                <h1>Hi {username}</h1>
                <span onClick={showProfilePage}>
                    <Avatar src={process.env.REACT_APP_BASE_URL + '/image/' + profilePicture} />
                </span>
                <span onClick={logout}>
                    <LogoutIcon />
                </span>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

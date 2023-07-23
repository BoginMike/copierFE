import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const [valid, setValid] = useState(false)
    useEffect(() => {
        //page loaded
        if (localStorage.getItem('token')) {

            setValid(true)

        } else {
            navigate('/login')
        }
    }, [])
    return (
        <>
            {
                valid ? children : <></>
            }
        </>
    )
}

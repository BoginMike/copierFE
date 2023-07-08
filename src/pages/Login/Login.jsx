import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    function login() {
        // do api call 
        // if we got token in response 
        // navigate to Song list page
        fetch('http://localhost:3001/users/generate-token', {
            headers: {
                username: username,
                password: password
            }
        }).then(x => x.json()) // convert response in json formatt
            .then(response => {  // response is json response sent from the server
                if (response.token) {
                    // username and passord is correct and token is generated successfully.
                    localStorage.setItem('token', response.token)
                    //navigate user to songslist page
                    navigate('/books-list')

                } else {
                    // something went wrong
                    localStorage.setItem('token', '')
                    alert("Username or password is incorrct!")
                }
            })
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <input value={username} onChange={x => setUsername(x.target.value)} type='text' placeholder='Username' />
                <input value={password} onChange={x => setPassword(x.target.value)} type='password' placeholder='Password' />
                <button onClick={login}>Log in</button>
                <a href='/sign-up'> Create Account</a>
            </div>
        </div>
    )
}

import React from 'react'
import { postApiCall } from '../../shared/api-utils'
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material';


export default function Signup() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function onSubmit(data) {
        postApiCall('/users', data)
            .then(r => {
                alert(r)
            })
    }

    return (
        <div className='login-page'>
            <form className='login-container' onSubmit={handleSubmit(onSubmit)}>

                <TextField error={errors.username} helperText={errors.username ? "username is required" : ""} {...register("username", { required: true })} label="Username" variant="outlined" />

                <TextField type='password' {...register("password")} label="Password" />

                <TextField type='text' {...register("email")} label="email" />

                <Button type="submit" variant='contained' > SIGNUP</Button>
            </form>
        </div>
    )
}


// export default function Signup() {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const navigate = useNavigate()

//     function signUp() {
//         let user = { username: username, password: password }
//         postApiCall('/users', user)
//             .then(response => {
//                 alert(response)
//                 navigate('/login')
//             })
//     }

//     return (
//         <div className='login-page'>
//             <div className='login-container'>
//                 <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
//                 <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
//                 <button onClick={signUp}>Sign Up</button>
//             </div>
//         </div>
//     )
// }



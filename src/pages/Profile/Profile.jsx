import React, { useEffect, useState } from 'react'
import Header from '../../shared/components/Header'
import { Avatar, Button, TextField } from '@mui/material'
import FileUpload from '../../shared/components/FileUpload'
import { useForm } from 'react-hook-form';
import { getApiCall, patchApiCall } from '../../shared/api-utils';

export default function Profile() {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const [fileName, setFileName] = useState('')

    const [user, setUser] = useState({})

    useEffect(() => {
        getApiCall("/users/my-info").then(response => {
            if(response.status){
                let data = response.data
                setUser(data);
                setValue('username',data.username)
                setValue('password',data.password)
                setValue('email',data.email)
                setFileName(data.profilePicture)
            }
           
        })
    }, [])


    function onSubmit(data) {
        data['profilePicture'] = fileName;
        data['_id'] = user._id
        patchApiCall('/users', data)
            .then(r => {

            })
    }

    function uploaded(fname) {
        setFileName(fname)
    }
    return (
        <div>
            <Header />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <Avatar src={process.env.REACT_APP_BASE_URL + '/image/' + user.profilePicture} />
                    </div>

                    <h4>Upload new image</h4>
                    <FileUpload onUpload={uploaded} />

                    <div>
                        <TextField error={errors.username} helperText={errors.username ? "username is required" : ""} {...register("username", { required: true })} label="Username" variant="outlined" />
                    </div>
                    <div>
                        <TextField type='password' {...register("password")} label="Password" />
                    </div>
                    <div>
                        <TextField type='text' {...register("email")} label="email" />
                    </div>



                    <Button type="submit" variant='contained' > Update Profile</Button>
                </form>
            </div>
        </div>
    )
}

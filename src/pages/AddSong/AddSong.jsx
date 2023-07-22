import React, { useState } from 'react'
import Header from '../../shared/components/Header'
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { postApiCall } from '../../shared/api-utils';
import FileUpload from '../../shared/components/FileUpload';

export default function AddSong() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [fileName, setFileName] = useState('')

    function save(data) {
        data['albumCover'] = fileName
        postApiCall('/songs', data)
            .then(x => {
                alert('song added')
            })
    }

    return (
        <div>
            <Header />
            <div className='container'>
                <form onSubmit={handleSubmit(save)}>
                    <TextField label='Song Name' {...register('songName')} />
                    <br />
                    <br />
                    <TextField label='Song Rating' {...register('rating')} />
                    <br />
                    <br />
                    <FileUpload onUpload={n => setFileName(n)} />
                    <Button variant='contained' type='submit'>Save</Button>

                </form>
            </div>

        </div>
    )
}

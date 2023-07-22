import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApiCall } from '../../shared/api-utils'
import { Avatar } from '@mui/material'
import Header from '../../shared/components/Header'

export default function SongList() {

    const [songs, setSongs] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // on page load this code will ge execute
        // componentDidMount()

        getApiCall('/songs')
            .then(response => {
                if (response?.status == false) {
                    // redirect to login
                    localStorage.clear();
                    navigate('/login')
                } else {
                    setSongs(response)
                }
            })

    }, [])
    return (
        <div>
            <Header/>
            SongList
            <hr />
            {
                songs.map(x =>
                    <div className='song-item'>
                        <Avatar src={process.env.REACT_APP_BASE_URL + '/image/' + x.albumCover}/>
                        <span>{x.songName}</span>
                        <span>{x.rating}</span>
                    </div>)
            }
        </div>
    )
}

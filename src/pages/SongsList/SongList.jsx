import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApiCall } from '../../shared/api-utils'

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
            SongList
            <hr />
            {
                songs.map(x => <div className='song-item'><span>{x.songName}</span><span>{x.rating}</span></div>)
            }
        </div>
    )
}

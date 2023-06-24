import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SongList() {

    const [songs, setSongs] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        // on page load this code will ge execute
        // componentDidMount()

        fetch('http://localhost:3001/songs', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(x => x.json())
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

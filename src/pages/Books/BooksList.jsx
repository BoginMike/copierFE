import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'
import HomeIcon from '@mui/icons-material/Home';
import { Pagination } from '@mui/material';
import { getApiCall } from '../../shared/api-utils';
import Header from '../../shared/components/Header';

export default function BooksList() {
    const [books, setBooks] = useState([])
    const [nextDisabled, setNextDisabled] = useState(false);
    const [totolPageCount,setTotalPageCount] = useState(1)
    
    const [pageNumber, setPageNumber] = useState(1);
    const handleChange = (event, value) => {
        console.log(value)
        setPageNumber(value);
        getBooks(value)
    };


    //page load 
    useEffect(() => {
        getBooks(pageNumber)
    }, [])

    function getBooks(pageNumber) {
        getApiCall('/books?pageNumber=' + pageNumber)
            .then(response => {
                setBooks(response.data)

                let t = (response.totalCount / response.pageSize);
                let totalPages = t > Math.floor(t) ? Math.floor(t) + 1 : Math.floor(t);  

                setTotalPageCount(totalPages)

                if ((response.totalCount / response.pageSize) <= response.pageNumber) {
                    setNextDisabled(true)
                } else {
                    setNextDisabled(false)
                }
            })
    }

    function next() {
        setPageNumber(pageNumber + 1)
        getBooks(pageNumber + 1)
    }
    function prev() {
        setPageNumber(pageNumber - 1)
        getBooks(pageNumber - 1)
    }

    return (
        <>
            <Header/>
            <h1>BooksList</h1>
            <hr />
            <HomeIcon />
            <h2>Page : {pageNumber}</h2>
            <Pagination count={totolPageCount} page={pageNumber} onChange={handleChange} />
            <hr />
            <div>
                {
                    books.map(x => <BookItem bookData={x} />)
                }
            </div>
        </>
    )
}

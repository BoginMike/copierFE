import React, { useEffect, useState } from 'react'
import BookItem from './BookItem'

export default function BooksList() {
    const [books, setBooks] = useState([])
    const [pageNumber, setPageNumber] = useState(1);
    const [nextDisabled, setNextDisabled] = useState(false)

    //page load 
    useEffect(() => {
        getBooks(pageNumber)
    }, [])

    function getBooks(pageNumber) {
        fetch('http://localhost:3001/books?pageNumber=' + pageNumber, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(x => x.json())
            .then(response => {
                setBooks(response.data)
                if ((response.totalCount / response.pageSize) <= response.pageNumber){
                    setNextDisabled(true)
                }else{
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
            <h1>BooksList</h1>
            <hr />
            <h2>Page : {pageNumber}</h2>
            <button disabled={pageNumber == 1} onClick={prev}>Prev Page</button>
            <button disabled={nextDisabled} onClick={next}>Next Page</button>
            <hr />
            <div>
                {
                    books.map(x => <BookItem bookData={x} />)
                }
            </div>
        </>
    )
}

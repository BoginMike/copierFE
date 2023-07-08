import React from 'react'

export default function BookItem({ bookData }) {
    return (
        <div className='book-card'>
            <img height={'200px'} src={bookData.thumbnailUrl} />
            <div>
                <h2>{bookData.title}</h2>
                <p>{bookData.shortDescription}</p>
                <div>
                    {
                        bookData.categories.map(x => <span className='book-category'>{x}</span>)
                    }
                </div>
            </div>

        </div>
    )
}

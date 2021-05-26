import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book/Book';
// import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
import { loadBookAsync } from '../redux/slices/bookSlice';
const Discover = () => {

    const dispatch = useDispatch()
    useEffect(() => dispatch(loadBookAsync()) , [])

    const books = useSelector((state)=> state.books.discoverList)
    return (
        <PageLayout>
            {
                books.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;
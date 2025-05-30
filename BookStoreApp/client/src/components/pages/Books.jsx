import React, { useState, useEffect } from 'react';
import axios from "axios";
import BooksSection from '../BooksSection';


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      const fetchData = async() => {
        try {
            const res = await axios.get("http://localhost:1000/api/books/getBooks");
            setBooks(res.data.books);
        } catch (error) {
            console.log(error);
        }
      };
      fetchData();
    },[]);
    
    
    return (
    <div className='bg-dark' style={{ minHeight: "91.5vh" }}>
        <div className='d-flex justify-content-center align-items-center py-3'>
            <h4 className='text-white'> Books Selection </h4>
        </div>
        {books ? (
          <BooksSection data = {books} />
          ) : (
          <div className='text-white'>Loading...</div>
          )}        
    </div>
  )
}

export default Books
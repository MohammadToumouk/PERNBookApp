import React, { useState, useEffect } from "react"
import MyForm from "../components/MyForm";
import Navbar from "../components/nav/NavBar";
import Pagination from "../components/pagination/Pagination";
import BooksComponent from "../components/Books/BooksComponent";
import axios from "axios";
import BooksCategory from "../components/Books/BooksByCate";




const books = () => {

   const [books, setBooks] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [booksPerPage] = useState(4);

   

   useEffect(() => {

   const fetchData = async () => {

      const res = await axios.get('http://localhost:5070/api/books');
      setBooks(res.data);
      
    };
      fetchData();

    }, [books]);


    
   
    
    /* get current Books */
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    
   return(
    <>
    <Navbar />
    <MyForm />
    <BooksComponent books={currentBooks} />
    <Pagination 
    booksPerPage={booksPerPage}
    totalBooks={books.length}
    paginate={paginate}
    currentPage={currentPage}/>
   {/* <BooksCategory books = {books} /> */}

      
    
    </>
   )



};
export default books
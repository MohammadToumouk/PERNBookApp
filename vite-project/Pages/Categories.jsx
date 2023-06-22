import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/nav/NavBar";
import BooksCategory from "../components/Books/BooksByCate";


const BooksCategoryPage = () => {

    return(
        <>
        <Navbar />
        <BooksCategory />
        
        </>
    )
} 
export default BooksCategoryPage
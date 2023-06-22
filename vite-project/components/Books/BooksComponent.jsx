import { useState,useEffect } from "react";
import myForm from "../MyForm";
import axios from "axios";

const BooksComponent = ({books}) => {
    
    const deleteBook = (bookId) => {

    
        axios.delete(`http://localhost:5070/api/books/${bookId}`)
        .then((response) => {
          console.log(response.data)
        }).catch(err => console.log(err))
      }
 

    return(
        <div className='books'>
        {books.map(book => (
          <div className='book' key={book.book_id}>
            <p>Title:{book.book_title}</p>
            <p>Author:{book.book_author}</p>
            <p>Category:{book.book_category}</p>
            <img width={"250px"} src={book.book_cover_url} />
            <br/><br/><br/>
            <button onClick={() => deleteBook(book.book_id)}>Delete</button>
          </div>
          
        ))}
        </div>
    
        )

} 
export default BooksComponent
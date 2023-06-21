import React from "react"

import { useEffect, useState } from 'react'
import axios from 'axios'



function myForm() {

    const [books, setBooks] = useState([]);
  const [book_id, setBook_Id] = useState();
  const [book_title, setBook_Title] = useState();
  const [book_author, setBook_Author] = useState();
  const [book_description, setBook_Description] = useState();
  const [book_category, setBook_Category] = useState();
  const [book_cover_url, setBook_Cover_Url] = useState();
  const [book_publshedAt, setBook_PublshedAt] = useState();
  const [book_isActive, setBook_IsActive] = useState();
  



  const Submit = () => {
    axios.post('http://localhost:5070/api/books', {book_id, book_title, book_author, book_description, book_category, book_cover_url,book_publshedAt, book_isActive})
    .then((books) => {
      console.log(books)
    }).catch(err => console.log(err))
  }

  const deleteBook = (bookId) => {

    
    axios.delete(`http://localhost:5070/api/books/${bookId}`)
    .then((response) => {
      console.log(response.data)
    }).catch(err => console.log(err))
  }



  const fetchData = () => {

    
    fetch('http://localhost:5070/api/books') 
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.log("error habibi", error));
  }

  useEffect(() => {
    fetchData();
  }, []);

    return(
        <div className='Page'>
    
     <form className='formContainer'>
      <h1>Create a new Book</h1>
      <div style={{display:"flex", flexDirection:"row"}}>
      <label for="book_id">Book ID:
      <input id="book_id" label="ID"  onChange={(e) => setBook_Id(e.target.value)}/>
      </label>
      <label for="book_title">Book TITLE:
      <input id="book_title" label="Title" onChange={(e) => setBook_Title(e.target.value)} />
      </label>
      <label for="book_author">Book Author:
      <input id="book_author" label="Author" onChange={(e) => setBook_Author(e.target.value)}/>
      </label>
      </div>
      <br/>
      <div>
      <label for="book_author">Description:
      <input style={{height:"10vh"}} id="book_description" label="Description" onChange={(e) => setBook_Description(e.target.value)} />
      </label>
      
      </div>
      <br/>
      <div style={{display:"flex", flexDirection:"row"}}>
      <label for="book_author">Category:
      <input id="book_category" label="Category" onChange={(e) => setBook_Category(e.target.value)} />
      </label>
      <label for="book_author">book_cover_url:
      <input id="book_cover_url" label="Image-URL" onChange={(e) => setBook_Cover_Url(e.target.value)} />
      </label>
      <label for="book_author">Ort:
      <input id="book_publshedAt" label="Publishing place" onChange={(e) => setBook_PublshedAt(e.target.value)}/>
      </label>
      <label for="book_author">Active?:
      <input id="book_isActive" label="Published?" onChange={(e) => setBook_IsActive(e.target.value)} />
      </label>
      </div>
      <br/>
      <div style={{display:"flex", flexDirection:"row"}}>
      
      
      

      </div>
      <br/>
      <button onClick={Submit}>Post</button>
      </form>
      <br/>
     
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
    </div>
    )
};
export default myForm


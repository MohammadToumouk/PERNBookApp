import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:5070/api/books') 
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.log("error habibi", error));
  }
  

  return (
    <>
  {books.map(book => (
    <div key={book.book_id}>
      <p>{book.book_title}</p>
    </div>
  ))}
    </>
  )
}

export default App

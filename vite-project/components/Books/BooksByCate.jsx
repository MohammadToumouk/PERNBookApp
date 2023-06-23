import { useState, useEffect } from "react";
import axios from "axios";

const BooksCategory = ({books}) => {

    const [selectedCategory, setSelectedCategory] = useState('');
   const [filterdBooks, setFilterdBooks] = useState([]);


   useEffect(() => {
    if(selectedCategory === ''){
       setFilterdBooks(books)
    } else {
       const fetchFilteredBooks = async () => {
          const res = await axios.get(`http://localhost:5070/api/books/${selectedCategory}`);
          console.log(res.data)
          setFilterdBooks(res.data);
       };
       fetchFilteredBooks();
    }
  }, [selectedCategory, books])


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };


  return(
    <>
    <label htmlFor="category">Filter by Category:</label>
          <select id="category" value={selectedCategory} onChange={(e) => handleCategoryChange(e)}>
            <option value="none" selected >-</option>
            <option value="History">History</option>
            <option value="Fiction">Fiction</option>
            <option value="Action">Action</option>
          </select>
    
          
          
    <div className='books'>
      
    {filterdBooks.map(filterdBook => (
      <div className='book' key={filterdBook.book_id}>
        <p>Title:{filterdBook.book_title}</p>
        <p>Author:{filterdBook.book_author}</p>
        <p>Category:{filterdBook.book_category}</p>
        <img width={"250px"} src={filterdBook.book_cover_url} />
        <br/><br/><br/>
        <button onClick={() => deleteBook(filterdBook.book_id)}>Delete</button>
      </div>
      
    ))}
    </div>
    
    </>
  )


  
}
export default BooksCategory

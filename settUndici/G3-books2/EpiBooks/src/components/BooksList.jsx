import { useState, useEffect } from "react";
import Book from "./Book";
import Buttons from "./Buttons";

const BooksList =({retriveTitle})=>{
    const [booksList, setBooksList] = useState([]);
    const [bookslistFiltered, setBooksListFiltered] = useState([]);

   /*  const categories = ['fantasy', 'history', 'horror', 'romance', 'scifi'] */

    function handleSearch(event) {
        let value = new RegExp(event.target.value, 'i') // 'i' = 'case insensitive
        const actualState = booksList;
        const result = actualState.filter((book) => {
            return value.test(book.title)
        })
        setBooksListFiltered(result)
    }
    useEffect(() => {
        setBooksListFiltered(booksList)
        retriveTitle(booksList[0] ? 'Categoria ' + booksList[0].category : 'Tutte le Categorie')
    }, [booksList])
    return(
        <>
        <input type="text" onChange={handleSearch}/>
        <Buttons setBooks={setBooksList} />
        <div className="d-flex justify-content-between flex-wrap">
        {bookslistFiltered.map((book) => {
            return (
                <Book book={book} key={book.asin} />
            )
        })
        }
        </div>
    </>
    )
};
 export default BooksList;

 
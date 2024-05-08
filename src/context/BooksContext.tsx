import { createContext, useCallback, useState } from "react";
import { BookProps } from "../modal/bookModal";

export interface booksContextprops {
  books: BookProps[];
  fetchBooks: () => void;
  handleOnSubmit: (title: string) => void;
  handleOnDelete: (id: number) => void;
  handleOnEdit: (id: number, title: string) => void;
}

const initialBooksContext: booksContextprops = {
  books: [],
  fetchBooks: () => {},
  handleOnSubmit: () => {},
  handleOnDelete: () => {},
  handleOnEdit: () => {},
};

const BooksContext = createContext(initialBooksContext);

function Provider({ children }: any) {
  const [books, setBooks] = useState<BookProps[]>([]);

  const fetchBooks = useCallback(async () => {
    const getBooks = await fetch("http://localhost:3001/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
    setBooks(getBooks);
  }, []);

  const handleOnSubmit = async (title: string) => {
    await fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedBooks = [...books, data];
        setBooks(updatedBooks);
      })
      .catch((error) => console.log(error));
  };

  const handleOnDelete = async (id: number) => {
    await fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });
        setBooks(updatedBooks);
      })
      .catch((error) => console.log(error));
  };

  const handleOnEdit = async (id: number, title: string) => {
    await fetch(`http://localhost:3001/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, ...data };
          }
          return book;
        });
        setBooks(updatedBooks);
      })
      .catch((error) => console.log(error));
  };

  const valueToShare = {
    books,
    fetchBooks,
    handleOnSubmit,
    handleOnDelete,
    handleOnEdit,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

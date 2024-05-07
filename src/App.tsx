import { Stack } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import { BookProps } from "./modal/bookModal";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    (async () => {
      const getBooks = await fetch("http://localhost:3001/books", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));
      setBooks(getBooks);
    })();
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

  return (
    <Stack>
      <Stack.Item>
        <BookCreate onSubmit={handleOnSubmit} />
      </Stack.Item>
      <Stack.Item>
        <BookList
          books={books}
          onDelete={handleOnDelete}
          onEdit={handleOnEdit}
        />
      </Stack.Item>
    </Stack>
  );
}

export default App;

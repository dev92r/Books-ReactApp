import React from "react";
import { BookProps } from "../../modal/bookModal";
import { Stack } from "@fluentui/react";
import BookShow from "./BookShow";

interface props {
  books: BookProps[];
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

function BookList({ books, onDelete, onEdit }: props) {
  return (
    <Stack horizontal>
      {books.map((book) => {
        return (
          <BookShow
            onDelete={onDelete}
            key={book.id}
            onEdit={onEdit}
            book={book}
          />
        );
      })}
    </Stack>
  );
}

export default BookList;

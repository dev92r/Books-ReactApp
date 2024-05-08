import { Stack } from "@fluentui/react";
import BookShow from "./BookShow";
import { useBooksContext } from "../../hooks/useBooksContext";

function BookList() {
  const { books } = useBooksContext();
  return (
    <Stack horizontal>
      {books.map((book) => {
        return <BookShow key={book.id} book={book} />;
      })}
    </Stack>
  );
}

export default BookList;

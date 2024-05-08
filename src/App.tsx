import { Stack } from "@fluentui/react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useBooksContext } from "./hooks/useBooksContext";
import { useEffect } from "react";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Stack>
      <Stack.Item>
        <BookCreate />
      </Stack.Item>
      <Stack.Item>
        <BookList />
      </Stack.Item>
    </Stack>
  );
}

export default App;

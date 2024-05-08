import { Stack } from "@fluentui/react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
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

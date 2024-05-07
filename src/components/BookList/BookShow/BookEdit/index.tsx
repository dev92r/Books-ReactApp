import { Stack, TextField, PrimaryButton } from "@fluentui/react";
import React, { useState } from "react";
import { BookProps } from "../../../../modal/bookModal";

interface props {
  book: BookProps;
  onSubmit: (id: number, title: string) => void;
}

function BookEdit({ book, onSubmit }: props) {
  const [editedTitle, setEditedTitle] = useState(book.title);

  const handleOnSubmit = () => {
    onSubmit(book.id, editedTitle);
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Stack.Item>
        <TextField
          value={editedTitle}
          placeholder="Title"
          onChange={(_, value) => {
            setEditedTitle(value || "");
          }}
        ></TextField>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton onClick={handleOnSubmit}>Submit</PrimaryButton>
      </Stack.Item>
    </Stack>
  );
}

export default BookEdit;

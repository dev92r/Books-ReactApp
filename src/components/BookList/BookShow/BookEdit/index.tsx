import { Stack, TextField, PrimaryButton } from "@fluentui/react";
import React, { useState } from "react";
import { BookProps } from "../../../../modal/bookModal";
import { useBooksContext } from "../../../../hooks/useBooksContext";

interface props {
  book: BookProps;
  onSave: () => void;
}

function BookEdit({ book, onSave }: props) {
  const [editedTitle, setEditedTitle] = useState(book.title);
  const { handleOnEdit } = useBooksContext();

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
        <PrimaryButton
          onClick={() => {
            handleOnEdit(book.id, editedTitle);
            onSave();
          }}
        >
          Submit
        </PrimaryButton>
      </Stack.Item>
    </Stack>
  );
}

export default BookEdit;

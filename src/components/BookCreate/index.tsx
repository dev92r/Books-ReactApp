import React, { useState } from "react";
import { PrimaryButton, Stack, Text, TextField } from "@fluentui/react";
import { useBooksContext } from "../../hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { handleOnSubmit } = useBooksContext();

  return (
    <Stack
      tokens={{ childrenGap: 20, padding: 20 }}
      styles={{
        root: {
          background: "rgb(0,55,85)",
          position: "fixed",
          width: "100%",
          bottom: 0,
          left: 0,
        },
      }}
    >
      <Stack.Item>
        <Text variant="xLarge" styles={{ root: { color: "white" } }}>
          Add a Book
        </Text>
      </Stack.Item>
      <Stack.Item>
        <TextField
          value={title}
          placeholder="Title"
          onChange={(_, value) => {
            setTitle(value || "");
          }}
        ></TextField>
      </Stack.Item>
      <Stack.Item>
        <PrimaryButton
          onClick={() => {
            handleOnSubmit(title);
          }}
        >
          Create
        </PrimaryButton>
      </Stack.Item>
    </Stack>
  );
}

export default BookCreate;

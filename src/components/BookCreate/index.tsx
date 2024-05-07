import React, { useState } from "react";
import { PrimaryButton, Stack, Text, TextField } from "@fluentui/react";

interface props {
  onSubmit: (title: string) => void;
}

function BookCreate({ onSubmit }: props) {
  const [title, setTitle] = useState("");

  const handleOnSubmit = () => {
    onSubmit(title);
    setTitle("");
  };
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
        <PrimaryButton onClick={handleOnSubmit}>Create</PrimaryButton>
      </Stack.Item>
    </Stack>
  );
}

export default BookCreate;

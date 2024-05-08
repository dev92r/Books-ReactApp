import { Icon, Stack, Text } from "@fluentui/react";
import React, { useState } from "react";
import { BookProps } from "../../../modal/bookModal";
import BookEdit from "./BookEdit";
import { useBooksContext } from "../../../hooks/useBooksContext";

interface props {
  book: BookProps;
}

function BookShow({ book }: props) {
  const [edit, setEdit] = useState<boolean>(false);
  const { handleOnDelete } = useBooksContext();

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleOnSave = () => {
    setEdit(false);
  };

  return (
    <Stack
      tokens={{ childrenGap: 10 }}
      styles={{
        root: {
          border: "1px solid rgba(0,0,0,0.5)",
          margin: 10,
          padding: 10,
        },
      }}
    >
      <Stack.Item>
        <Stack horizontal horizontalAlign="end" tokens={{ childrenGap: 15 }}>
          <Stack.Item>
            <Icon
              iconName="Edit"
              styles={{ root: { cursor: "pointer" } }}
              onClick={handleEditClick}
            />
          </Stack.Item>
          <Stack.Item>
            <Icon
              iconName="Cancel"
              styles={{ root: { cursor: "pointer" } }}
              onClick={() => {
                handleOnDelete(book.id);
              }}
            />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <img
          src={`https://picsum.photos/seed/${book.id}/200/300`}
          alt={book.title}
        />
      </Stack.Item>
      <Stack.Item>
        {!edit && <Text variant="large">{book.title}</Text>}
        {edit && <BookEdit onSave={handleOnSave} book={book} />}
      </Stack.Item>
    </Stack>
  );
}

export default BookShow;

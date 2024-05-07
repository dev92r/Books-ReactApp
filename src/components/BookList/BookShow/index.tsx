import { Icon, Stack, Text } from "@fluentui/react";
import React, { useState } from "react";
import { BookProps } from "../../../modal/bookModal";
import BookEdit from "./BookEdit";

interface props {
  book: BookProps;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
}

function BookShow({ book, onDelete, onEdit }: props) {
  const [edit, setEdit] = useState<boolean>(false);

  const handleOnDelete = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setEdit(!edit);
  };
  const handleOnEdit = (id: number, newTitle: string) => {
    setEdit(false);
    onEdit(id, newTitle);
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
            <Icon iconName="Edit" onClick={handleEditClick} />
          </Stack.Item>
          <Stack.Item>
            <Icon iconName="Cancel" onClick={handleOnDelete} />
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <img src={`https://picsum.photos/seed/${book.id}/200/300`} />
      </Stack.Item>
      <Stack.Item>
        {!edit && <Text variant="large">{book.title}</Text>}
        {edit && <BookEdit onSubmit={handleOnEdit} book={book} />}
      </Stack.Item>
    </Stack>
  );
}

export default BookShow;

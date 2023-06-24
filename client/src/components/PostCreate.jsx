import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export const PostCreate = (props) => {
  return (
    <Create {...props} title="Create a Post">
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="author" />
        <DateInput source="createdAt" label="Publish date" />
      </SimpleForm>
    </Create>
  );
};

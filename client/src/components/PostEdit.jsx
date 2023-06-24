import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

export const PostEdit = (props) => {
  return (
    <Edit {...props} title="Edit a Post">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="author" />
        <DateInput source="createdAt" label="Publish date" />
      </SimpleForm>
    </Edit>
  );
};

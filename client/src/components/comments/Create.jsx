import React from "react";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CommentsCreate = (props) => {
  return (
    <Create {...props} title="Post a Comment">
      <SimpleForm>
        <TextInput source="body" />
        <ReferenceInput label="Post" source="postId" reference="posts">
            <SelectInput />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

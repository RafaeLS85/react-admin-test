import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

export const PostList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <TextField source='author' />
            <DateField source='createdAt' />
            <EditButton basePath='/posts' />
            <DeleteButton basePath='/posts' />
        </Datagrid>
    </List>
  )
}

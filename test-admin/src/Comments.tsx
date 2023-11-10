import { Datagrid, EmailField, List, ReferenceField, TextField, Edit, ReferenceInput, SimpleForm, TextInput, Create} from "react-admin";

export const CommentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </SimpleForm>
    </Edit>
);

export const CommentCreate = () => (
    <Create>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" />
            <TextInput source="name" />
            <TextInput source="body" />
        </Datagrid>
    </Create>
);
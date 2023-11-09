import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList, UserShow } from "./users";
import { PostList, PostEdit, PostCreate} from "./posts";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
  <Resource name="users" list={UserList} show={UserShow} recordRepresentation="name"/>
</Admin>;

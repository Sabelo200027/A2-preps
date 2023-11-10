import { Admin, ListGuesser, Resource, ShowGuesser, EditGuesser} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList, UserShow, UserEdit, UserCreate} from "./users";
import { PostList, PostEdit, PostCreate, PostShow} from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import { Dashboard } from "./Dashboard";
import { CommentCreate, CommentList, CommentEdit } from "./Comments";

export const App = () => <Admin dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} icon={PostIcon}/>
  <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} recordRepresentation="name" icon={UserIcon}/>
  <Resource name="Comments" list={CommentList} edit={CommentEdit} create={CommentCreate} icon={CommentIcon}/>
</Admin>;

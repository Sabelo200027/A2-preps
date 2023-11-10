import { Admin, Resource, ShowGuesser,} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList, UserShow, UserEdit, UserCreate} from "./users";
import { PostList, PostEdit, PostCreate, PostShow} from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";


export const App = () => <Admin dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} icon={PostIcon}/>
  <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} create={UserCreate} recordRepresentation="name" icon={UserIcon}/>
</Admin>;

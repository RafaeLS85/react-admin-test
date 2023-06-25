import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList } from "./components/posts/List";
import { PostCreate } from "./components/posts/Create";
import { PostEdit } from "./components/posts/Edit";
import { CommentsCreate } from "./components/comments/Create";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    <Resource name="comments" list={ListGuesser}  create={CommentsCreate} />
  </Admin>
);

export default App;
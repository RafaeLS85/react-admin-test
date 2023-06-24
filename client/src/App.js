import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-simple-rest";
import { PostList } from "./components/PostList";
import { PostCreate } from "./components/PostCreate";
import { PostEdit } from "./components/PostEdit";

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
    {/* <Resource name="comments" list={ListGuesser} /> */}
  </Admin>
);

export default App;
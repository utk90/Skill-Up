// import Accordian from "./components/Accordian/Accordian";
// import Nested from "./components/NestedComments/Nested";\  
// import { CommentThread } from "./components/CommentThread/CommentThread";
// import { comments } from "./components/CommentThread/data.js";
// import FileStore from "./components/FileExplorer/FileStore";
// import Form from "./components/LoginForm/Form";

import Folder from "./components/ConflueneTree/Folder";
import DATA from './components/ConflueneTree/data';


function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <Nested data={comments} /> */}
      {/* <CommentThread comments={comments} /> */}
      {/* <FileStore /> */}
      {/* <Form /> */}
      <Folder data={DATA} />
    </div>
  );
}

export default App;

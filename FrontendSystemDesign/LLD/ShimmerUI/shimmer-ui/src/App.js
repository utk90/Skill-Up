// import Accordian from "./components/Accordian/Accordian";
import Nested from "./components/NestedComments/Nested";
import { comments } from "./components/NestedComments/data";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      <Nested data={comments} />
    </div>
  );
}

export default App;

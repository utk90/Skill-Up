import { useState } from "react";
import Vote from "./components/Vote";
import Results from "./components/Results";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {!token ? (
        <div>
          <Register />
          <Login setToken={setToken} />
        </div>
      ) : (
        <div>
          <Vote token={token} />
          <Results token={token} />
        </div>
      )}
    </div>
  );
}

export default App;

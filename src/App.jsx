import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Aside from "./Components/Aside";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Aside />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;

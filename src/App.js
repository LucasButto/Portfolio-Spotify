import { BrowserRouter } from "react-router-dom";
import { PathProvider } from "./Contexts/PathContext";
import "./App.css";

import Aside from "./Components/Aside";
import Main from "./Components/Main";

function App() {
  return (
    <PathProvider>
      <BrowserRouter>
        <div className="body">
          <Aside />
          <Main />
        </div>
      </BrowserRouter>
    </PathProvider>
  );
}

export default App;

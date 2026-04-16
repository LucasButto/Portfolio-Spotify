import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Aside from "./Components/Aside";
import Main from "./Components/Main";
import { PlayerProvider } from "./Hooks/PlayerContext";

function App() {
  return (
    <BrowserRouter>
      <PlayerProvider>
        <div className="body">
          <Aside />
          <Main />
        </div>
      </PlayerProvider>
    </BrowserRouter>
  );
}

export default App;

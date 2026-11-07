import Portfolio from "@/components/Portfolio/Portfolio";
import { LocaleProvider } from "@/context/LocaleProvider";
import { PlayerProvider } from "@/context/PlayerProvider";

const App = () => (
  <LocaleProvider>
    <PlayerProvider>
      <Portfolio />
    </PlayerProvider>
  </LocaleProvider>
);

export default App;

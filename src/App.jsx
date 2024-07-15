import "./App.css";
import "./index.css";
import DesktopNav from "./components/DesktopNav";
import MainDesktop from "./components/MainDesktop";
import Text from "./components/Text";


function App() {
  return (
    <>
      <div className="text-kumbh">
        <DesktopNav />
      </div>
      <div className="flex flex-row mt-40">
        <MainDesktop />
        <Text />
      </div>
    </>
  );
}

export default App;

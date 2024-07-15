import "./App.css";
import "./index.css";
import DesktopNav from "./components/DesktopNav";
import MainDesktop from "./components/MainDesktop";
import Text from "./components/Text";
import AddToCart from "./components/AddToCart";
import SneakerCounter from "./components/SneakerCounter";

function App() {
  return (
    <>
      <div className="text-kumbh">
        <DesktopNav />
      </div>
      <div className="flex mt-40">
        <MainDesktop />
        <div>
          <Text />
          <div className="flex flex-row items-center p-20 space-x-6">
            <SneakerCounter />
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

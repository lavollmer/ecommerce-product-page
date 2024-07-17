import "./App.css";
import { useState } from "react";
import "./index.css";
import DesktopNav from "./components/DesktopNav";
import MainDesktop from "./components/MainDesktop";
import Text from "./components/Text";
import AddToCart from "./components/AddToCart";
import SneakerCounter from "./components/SneakerCounter";
import Dropdown from "./components/Dropdown";
import MobileNav from "./components/MobileNav.jsx";
import MobileSneakers from "./components/MobileSneakers.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (newCount) => {
    setCount(newCount);
    setTotal(125.0 * newCount);
  };

  return (
    <>
      <div className="flex flex-row w-full md:hidden">
        <MobileNav className="w-full" />
      </div>
      <div>
        <div className="md:hidden">
          <MobileSneakers />
        </div>
        <div className="md:hidden">
          <Text />
          <div className="flex flex-col md:flex-row items-center p-4 md:p-20 space-y-4 md:space-y-0 md:space-x-6">
            <SneakerCounter onAddToCart={handleAddToCart} />
            <AddToCart setCount={setCartCount} />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row">
          <div>
            <DesktopNav />
          </div>
          <div className="flex flex-row text-kumbh mt-40 ">
            <div className="flex flex-col w-full">
              <MainDesktop />
            </div>
            <div className="flex flex-col w-full">
              <div className="mt-10 left-0">
                <Text />
              </div>
              <div className="flex flex-row items-center p-4">
                <SneakerCounter onAddToCart={handleAddToCart} />
                <AddToCart setCount={setCartCount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

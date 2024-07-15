import "./App.css";
import { useState } from "react";
import "./index.css";
import DesktopNav from "./components/DesktopNav";
import MainDesktop from "./components/MainDesktop";
import Text from "./components/Text";
import AddToCart from "./components/AddToCart";
import SneakerCounter from "./components/SneakerCounter";
import Dropdown from "./components/Dropdown";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartCount,setCartCount] = useState(0);

  const handleAddToCart = (newCount) => {
    setCount(newCount);
    setTotal(125.0 * newCount);
  };

  return (
    <>
      <div className="text-kumbh">
        <DesktopNav />
        <Dropdown count={count} total={total} />
      </div>
      <div className="flex mt-40">
        <MainDesktop />
        <div>
          <Text />
          <div className="flex flex-row items-center p-20 space-x-6">
            <SneakerCounter onAddToCart={handleAddToCart} />
            <AddToCart setCount={setCartCount} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

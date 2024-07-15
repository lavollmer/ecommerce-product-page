import React from "react";
import PropTypes from "prop-types";
import cart from "../assets/icon-cart.svg";

const AddToCart = ({ setCount }) => {
  return (
    <div className="flex flex-row">
      <button onClick={() => setCount((prevCount) => prevCount + 1)} className="flex flex-row items-center bg-orange text-black font-bold text-lg rounded-lg py-3 px-6" >
        <img src={cart} alt="cart icon" className="mr-2 font-black" />
        Add to Cart
      </button>
    </div>
  );
};

// Define default props in case setCount is not passed
AddToCart.defaultProps = {
  setCount: () => console.warn("setCount function is not passed to AddToCart"),
};

// Define PropTypes
AddToCart.propTypes = {
  setCount: PropTypes.func.isRequired, // Ensures setCount is a function and is required
};

export default AddToCart;

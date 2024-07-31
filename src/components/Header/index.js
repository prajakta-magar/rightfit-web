import React, { useEffect, useState, useRef } from "react";
import background from "../../assets/images/bg-image.svg";
import cart from "../../assets/images/cart.svg";
import cartblack from "../../assets/images/cart-black.svg";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { state, dispatch } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    let currentPos = imageRef.current;
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    if (currentPos) observer.observe(currentPos);

    return () => {
      if (currentPos) observer.unobserve(currentPos);
    };
  }, []);

  const handleToggleCart = () => {
    dispatch({ type: "TOGGLE_CART_DISPLAY" });
  };

  return (
    <>
      <div className="relative">
        <img ref={imageRef} className="w-full" src={background} alt="bg-img" />
        <div className="fixed top-0 left-0 w-full px-12 py-4 transition-colors duration-300 z-50">
          <div
            className={`grid grid-cols-3 gap-4 w-full ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <div className="col-span-1">
              <ul className="flex flex-row gap-3 items-center flex-nowrap">
                <li className="cursor-pointer text-[18px] font-extrabold">
                  <span
                    className={`${
                      scrolled ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    RIGHT
                  </span>
                  FIT.COM
                </li>
              </ul>
            </div>
            <div className="flex col-span-2 items-center w-full justify-end">
              <ul
                className={`flex flex-row gap-8 items-center flex-nowrap ${
                  state.displayCart ? "text-black" : ""
                }`}
              >
                <li className="cursor-pointer px-3 text-[16px] font-bold whitespace-nowrap">
                  All Products
                </li>
                <li className="cursor-pointer px-3 text-[16px] font-bold whitespace-nowrap">
                  Featured Products
                </li>
                <li
                  className="cursor-pointer px-3 text-[16px] font-bold whitespace-nowrap"
                  onClick={handleToggleCart}
                >
                  <span className="flex gap-3 text-[14px]">
                    <img
                      className="w-full"
                      src={scrolled || state.displayCart ? cartblack : cart}
                      alt="cart"
                    />
                    {state.totalItems}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute top-60 left-44 text-white">
          <h1 className="text-[64px] font-black leading-[0.8]">
            Latest Styles
          </h1>
          <p className="text-[20px] font-extrabold">At Yesterday’s Prices</p>
          <button className="bg-red-500 text-md font-bold text-white py-2 px-4 rounded-lg mt-3">
            BROWSE ALL STYLES
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

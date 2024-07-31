import React from "react";
import ProductInfo from "../ProductInfo";
import { useCart } from "../../context/CartContext";
import ImageWithFallback from "../ImageWithFallBAck";

const Product = ({ product, color, material }) => {
  const { state, dispatch } = useCart();

  const handleAddToCart = () => {
    if (!state.cartItems.map((obj) => obj.id).includes(product.id)) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  return (
    <div className="p-2">
      <div
        className="border relative group cursor-pointer"
        onClick={handleAddToCart}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          styling={"w-full h-auto"}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-lg">
            {state.cartItems.map((obj) => obj.id).includes(product.id)
              ? "Already In Cart"
              : "Add to Cart"}
          </p>
        </div>
      </div>
      <ProductInfo
        name={product.name}
        color={color}
        material={material}
        price={product.price}
      />
    </div>
  );
};

export default Product;

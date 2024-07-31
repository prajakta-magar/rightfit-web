import ProductInfo from "../ProductInfo";
import { useCart } from "../../context/CartContext";
import ImageWithFallback from "../ImageWithFallBAck";

const CartSidebar = ({ getColorName, getMaterialName }) => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleCloseCart = () => {
    dispatch({ type: "TOGGLE_CART_DISPLAY" });
  };

  return (
    <div className="w-[35%] p-10 bg-gray-100 fixed right-0 top-0 bottom-0 overflow-auto">
      <div className="flex justify-between mt-10">
        <h2 className="font-medium text-lg mb-2 font-serif">Shopping Cart</h2>
        <button className="" onClick={handleCloseCart}>
          &times;
        </button>
      </div>
      {!state.cartItems.length && (
        <span className="text-red-600">Nothing in Cart</span>
      )}
      {state.cartItems.map((item, index) => (
        <div key={index} className="flex items-start gap-10 mt-5">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            styling="w-32 h-52 border"
          />
          <div className="">
            <ProductInfo
              name={item.name}
              color={getColorName(item.colorId)}
              material={getMaterialName(item.materialId)}
              price={item.price}
            />
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-slate-700 text-white px-2 py-1 rounded mt-2"
            >
              Remove &times;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSidebar;

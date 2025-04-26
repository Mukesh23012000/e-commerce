import { useCartContext } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext"; // Import the Theme Context
import { FaTrash, FaMinus } from "react-icons/fa";

const CartSidebar = () => {
  const cartContext = useCartContext();
  const theme = useTheme(); 
  const total = cartContext?.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`w-1/4 p-4 h-screen overflow-y-auto 
        ${theme?.darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
      `}
    >
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      
      {cartContext?.cart?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartContext?.cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <span>{item.name} x {item.quantity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => cartContext.removeFromCart(item)}
                  className="text-red-600 hover:text-red-800 text-sm"
                  aria-label="Remove item"
                  title={item.quantity > 1 ? "Remove one" : "Remove item"}
                >
                  {item.quantity > 1 ? <FaMinus /> : <FaTrash />}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <hr className={`my-4 ${theme?.darkMode ? "border-gray-600" : "border-gray-300"}`} />
      <p className="font-bold">Total: ₹{total?.toFixed(2)}</p>
    </div>
  );
};

export default CartSidebar;
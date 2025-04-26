import { useCartContext } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";
import { memo } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
import { useProductContext } from "../contexts/ProductContext";

const ProductCard = ({ product }) => {
  const { darkMode } = useTheme();
  const { addToCart } = useCartContext();
  const { updateRating } = useProductContext();

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const fullStarCount = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    
    for (let i = 0; i < fullStarCount; i++) {
      stars.push(<FaStar key={"full-" + i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={"empty-" + stars.length} className="text-yellow-400" />);
    }

    return stars;
  };

  const handleRatingChange = (e) => {
    const newRating = parseFloat(e.target.value);
    updateRating(product.id, newRating);
  }
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md p-4 flex flex-col 
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
        hover:shadow-lg transition`}
    >
      <div className="relative w-full h-40 mb-4 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      
      <div className="flex items-center gap-1 mb-2">
        {renderStars(product.rating || 0)}
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
          ({product.rating?.toFixed(1) || "0.0"})
        </span>
      </div>

      <select
        value={product.rating}
        onChange={handleRatingChange}
        className={`border rounded p-1 mb-2 text-sm  ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white"}`}
      >
        {[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
          <option key={value} value={value}>
            {value} ⭐
          </option>
        ))}
      </select>

      <p className="text-gray-500 dark:text-gray-400 mb-2">{product.category}</p>
      <p className="font-bold mb-4">₹{product.price}</p>
      
      <button 
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default memo(ProductCard);

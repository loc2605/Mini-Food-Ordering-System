import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatPrice';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(food);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {food.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {food.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-orange-600 font-bold text-lg">
            {formatPrice(food.price)}
          </span>

          <button
            onClick={handleAddToCart}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
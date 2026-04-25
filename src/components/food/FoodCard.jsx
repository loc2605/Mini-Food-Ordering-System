import { useCart } from '../../context/CartContext';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={food.image} alt={food.name} className="w-full h-32 object-cover mb-2" />
      <h2 className="text-lg font-bold">{food.name}</h2>
      <p className="text-gray-600">{food.description}</p>
      <p className="text-green-600 font-bold">{food.price.toLocaleString()} VND</p>
      <button
        onClick={() => addToCart(food)}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default FoodCard;
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>{item.price.toLocaleString()} VND x {item.quantity}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-red-500"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CartItem;
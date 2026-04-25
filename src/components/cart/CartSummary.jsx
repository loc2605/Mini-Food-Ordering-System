import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { getTotal } = useCart();

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h3 className="font-bold">Tổng cộng: {getTotal().toLocaleString()} VND</h3>
      <Link to="/checkout">
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Thanh toán
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;

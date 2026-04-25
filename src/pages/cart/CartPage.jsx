import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Header from '../../components/layout/Header';
import { formatPrice } from '../../utils/formatPrice';
import createOrder from '../../services/orderService';

const CartPage = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice
  } = useCart();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreateOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.userId) {
      setError('Vui lòng đăng nhập để tạo đơn hàng');
      navigate('/login');
      return;
    }

    if (!cart || cart.length === 0) {
      setError('Giỏ hàng đang trống');
      return;
    }

    setLoading(true);
    setError('');

    const requestBody = {
      userId: user.userId,
      items: cart.map((item) => ({
        foodId: item.id,
        quantity: item.quantity
      }))
    };

    try {
      const response = await createOrder(requestBody);

      if (response.success) {
        localStorage.setItem('currentOrder', JSON.stringify(response.data));
        clearCart();
        alert('Tạo đơn hàng thành công');
        navigate('/checkout');
      } else {
        setError(response.message || 'Không thể tạo đơn hàng');
      }
    } catch (err) {
      setError('Không thể kết nối đến máy chủ');
    } finally {
      setLoading(false);
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-background font-body-md text-on-surface">
        <Header currentPage="cart" />

        <main className="max-w-7xl mx-auto w-full px-6 py-10">
          
          {/* NÚT QUAY LẠI */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-gray-700 hover:text-orange-600 mb-4"
          >
            ← Quay lại
          </button>

          <h1 className="font-h1 text-h3 mb-8 text-on-surface">
            Giỏ hàng của bạn
          </h1>

          <div className="flex flex-col items-center justify-center py-24 space-y-6">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400 text-6xl">
                shopping_cart_off
              </span>
            </div>

            <div className="text-center">
              <h3 className="font-h3 text-on-surface">
                Giỏ hàng của bạn đang trống
              </h3>
              <p className="text-on-secondary-container mt-2">
                Có vẻ như bạn chưa chọn được món ăn nào ưng ý.
              </p>
            </div>

            <button
              onClick={() => navigate('/menu')}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-button hover:bg-orange-700 transition-colors"
            >
              Quay lại thực đơn
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <Header currentPage="cart" />

      <main className="max-w-7xl mx-auto w-full px-6 py-10">
        
        {/* NÚT QUAY LẠI */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-700 hover:text-orange-600 mb-4"
        >
          ← Quay lại
        </button>

        <h1 className="font-h1 text-h3 mb-8 font-bold text-on-surface">
          Giỏ hàng của bạn
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center"
                  >
                    -
                  </button>

                  <span className="w-8 text-center">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Tóm tắt đơn hàng</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Số món:</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <div className="flex justify-between font-semibold">
                <span>Tổng cộng:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}

            <button
              onClick={handleCreateOrder}
              disabled={loading}
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang tạo đơn hàng...' : 'Tạo đơn hàng'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import createPayment from '../../services/paymentService';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('currentOrder');

    if (!savedOrder) {
      navigate('/cart');
      return;
    }

    setOrder(JSON.parse(savedOrder));
  }, [navigate]);

  const handlePayment = async () => {
    if (!order) return;

    setLoading(true);
    setError('');

    const requestBody = {
      order_id: order.orderId,
      payment_method: paymentMethod,
      amount: order.totalPrice
    };

    try {
      const response = await createPayment(requestBody);
        console.log(response);
      if (response.success) {
        setPaymentResult(response.data);
        setShowModal(true);
      } else {
        setError(response.message || 'Thanh toán thất bại');
      }
    } catch (err) {
      setError('Không thể kết nối đến dịch vụ thanh toán');
    } finally {
      setLoading(false);
    }
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-gray-600">Đang tải đơn hàng...</p>
      </div>
    );
  }

  const paymentOptions = [
    {
      value: 'COD',
      label: 'Tiền mặt (COD)',
      icon: 'money',
      desc: 'Thanh toán khi nhận món'
    },
    {
      value: 'BANKING',
      label: 'Chuyển khoản',
      icon: 'account_balance',
      desc: 'Thanh toán qua ngân hàng'
    }
  ];

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <main className="flex-grow pt-28 pb-20 max-w-7xl mx-auto px-6 w-full">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-1 text-gray-700 hover:text-orange-600 transition-colors"
        >
          ← Quay lại
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Thanh toán
            </h1>

            <section className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-orange-600">
                <span className="material-symbols-outlined">receipt_long</span>
                <h2 className="text-xl font-bold">Thông tin đơn hàng</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Mã đơn hàng</p>
                  <p className="font-semibold">#{order.orderId}</p>
                </div>

                <div>
                  <p className="text-gray-500">Trạng thái</p>
                  <p className="font-semibold text-orange-600">
                    {order.status || 'PENDING'}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">Người dùng</p>
                  <p className="font-semibold">User #{order.userId}</p>
                </div>

                <div>
                  <p className="text-gray-500">Thời gian tạo</p>
                  <p className="font-semibold">
                    {order.createdAt || 'Vừa tạo'}
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <div className="flex items-center gap-2 mb-6 text-orange-600">
                <span className="material-symbols-outlined">payments</span>
                <h2 className="text-xl font-bold">Phương thức thanh toán</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentOptions.map((payment) => (
                  <label key={payment.value} className="cursor-pointer">
                    <input
                      className="hidden peer"
                      name="paymentMethod"
                      type="radio"
                      checked={paymentMethod === payment.value}
                      onChange={() => setPaymentMethod(payment.value)}
                    />

                    <div className="p-5 border border-gray-200 rounded-xl peer-checked:border-orange-500 peer-checked:bg-orange-50 hover:shadow-md transition-all flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                          <span className="material-symbols-outlined">
                            {payment.icon}
                          </span>
                        </div>

                        <div>
                          <p className="font-bold text-gray-900">
                            {payment.label}
                          </p>
                          <p className="text-sm text-gray-500">
                            {payment.desc}
                          </p>
                        </div>
                      </div>

                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-orange-500 flex items-center justify-center">
                        {paymentMethod === payment.value && (
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                        )}
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {paymentMethod === 'BANKING' && (
                <div className="mt-6 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-1">
                    Thông tin chuyển khoản giả lập
                  </p>
                  <p className="text-sm text-gray-600">
                    Ngân hàng: MiniFood Bank
                  </p>
                  <p className="text-sm text-gray-600">
                    Nội dung: THANHTOAN DON #{order.orderId}
                  </p>
                </div>
              )}
            </section>

            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100">
                {error}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Đơn hàng của bạn</h2>

              <div className="space-y-4 mb-6">
                {order.items?.map((item, index) => (
                  <div key={`${item.foodId}-${index}`} className="flex justify-between gap-3">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.foodName || `Món #${item.foodId}`}
                      </p>
                      <p className="text-sm text-gray-500">
                        Số lượng: {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold text-orange-600">
                      {formatPrice(item.priceAtOrder * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính</span>
                  <span>{formatPrice(order.totalPrice)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Phí vận chuyển</span>
                  <span>{formatPrice(0)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-dashed">
                  <span>Tổng thanh toán</span>
                  <span className="text-orange-600">
                    {formatPrice(order.totalPrice)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePayment}
                disabled={loading}
                className="w-full mt-8 py-4 bg-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Đang thanh toán...' : 'Thanh toán'}
              </button>
            </div>
          </aside>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <span className="material-symbols-outlined text-6xl">
                check_circle
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Thanh toán thành công!
            </h2>

            <p className="text-gray-600 mb-4">
              Đơn hàng #{order.orderId} đã được thanh toán thành công.
            </p>

            {paymentResult?.paymentId && (
              <p className="text-sm text-gray-500 mb-2">
                Mã giao dịch: {paymentResult.paymentId}
              </p>
            )}

            {paymentResult?.message && (
              <p className="text-sm text-gray-500 mb-6">
                {paymentResult.message}
              </p>
            )}

            <button
              onClick={() => {
                localStorage.removeItem('currentOrder');
                navigate('/menu');
              }}
              className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-all"
            >
              Tiếp tục chọn món
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
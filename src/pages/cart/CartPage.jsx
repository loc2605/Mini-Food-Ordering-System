import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Header from '../../components/layout/Header';

const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const [selectedItems, setSelectedItems] = useState(cart.map(item => item.id));
  const [discountCode, setDiscountCode] = useState('');
  const [note, setNote] = useState('');

  const handleSelectAll = (checked) => {
    setSelectedItems(checked ? cart.map(item => item.id) : []);
  };

  const handleSelectItem = (id, checked) => {
    if (checked) {
      setSelectedItems(prev => [...prev, id]);
    } else {
      setSelectedItems(prev => prev.filter(itemId => itemId !== id));
    }
  };

  const selectedTotal = cart
    .filter(item => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const shippingFee = selectedTotal > 20000 ? 0 : 15000;
  const discount = discountCode.toLowerCase() === 'minifood10' ? 10000 : 0;
  const finalTotal = selectedTotal + shippingFee - discount;

  const handleCheckout = () => {
    if (selectedItems.length === 0) return;
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background font-body-md text-on-surface">
        <Header currentPage="cart" />
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
          <h1 className="font-h1 text-h3 mb-8 text-on-surface">Giỏ hàng của bạn</h1>
          <div className="flex-col items-center justify-center py-24 space-y-6">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400 text-6xl" data-icon="shopping_cart_off">shopping_cart_off</span>
            </div>
            <div className="text-center">
              <h3 className="font-h3 text-on-surface">Giỏ hàng của bạn đang trống</h3>
              <p className="text-on-secondary-container mt-2">Có vẻ như bạn chưa chọn được món ăn nào ưng ý.</p>
            </div>
            <a className="bg-primary-container text-white px-8 py-3 rounded-full font-button hover:bg-primary transition-all" href="#" onClick={() => navigate('/')}>Xem thực đơn ngay</a>
          </div>
        </main>
        <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-auto">
          <div className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="font-bold text-gray-700 dark:text-gray-300">minifood</span>
              <div className="flex gap-4 font-be-vietnam-pro text-xs text-gray-500 dark:text-gray-400">
                <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Support</a>
                <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Privacy Policy</a>
                <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Terms of Service</a>
                <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Contact Kitchen</a>
              </div>
            </div>
            <p className="font-be-vietnam-pro text-xs text-gray-500 dark:text-gray-400">© 2026 minifood. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <Header currentPage="cart" />

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-10">
        <h1 className="font-h1 text-h3 mb-8 text-on-surface">Giỏ hàng của bạn</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex justify-between items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  checked={selectedItems.length === cart.length && cart.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-primary-container focus:ring-primary-container cursor-pointer"
                  type="checkbox"
                />
                <span className="font-label-md text-on-surface">Chọn tất cả ({cart.length} sản phẩm)</span>
              </label>
              <button
                onClick={() => {
                  selectedItems.forEach(id => removeFromCart(id));
                  setSelectedItems([]);
                }}
                className="text-error font-label-md hover:underline flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">delete</span>
                Xóa tất cả
              </button>
            </div>

            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4 transition-transform hover:-translate-y-0.5 duration-200">
                  <input
                    checked={selectedItems.includes(item.id)}
                    onChange={(e) => handleSelectItem(item.id, e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-primary-container focus:ring-primary-container cursor-pointer"
                    type="checkbox"
                  />
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img alt={item.title} className="w-full h-full object-cover" src={item.image} />
                  </div>
                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-h3 text-body-md text-on-surface">{item.title}</h3>
                      <p className="text-primary-container font-bold">{item.price.toLocaleString()}đ</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="px-4 font-label-md">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <div className="text-right min-w-[80px]">
                        <span className="text-on-surface font-bold">{(item.price * item.quantity).toLocaleString()}đ</span>
                      </div>
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          setSelectedItems(prev => prev.filter(id => id !== item.id));
                        }}
                        className="text-gray-400 hover:text-error transition-colors"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.1)] p-6 space-y-6">
              <h2 className="font-h2 text-h3 text-on-surface border-b border-gray-100 pb-4">Tóm tắt đơn hàng</h2>

              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant">Mã giảm giá</label>
                <div className="flex gap-2">
                  <input
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-grow rounded-lg border-gray-200 focus:ring-2 focus:ring-primary-container focus:border-primary-container font-body-md px-4 py-2"
                    placeholder="Nhập mã ưu đãi..."
                    type="text"
                  />
                  <button className="bg-primary-container text-white px-4 py-2 rounded-lg font-button hover:bg-primary transition-colors active:scale-95">
                    Áp dụng
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant">Ghi chú cho quán</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full rounded-lg border-gray-200 focus:ring-2 focus:ring-primary-container focus:border-primary-container font-body-md px-4 py-2"
                  placeholder="Ví dụ: Không hành, ít cay..."
                  rows="2"
                ></textarea>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex justify-between font-body-md">
                  <span className="text-on-secondary-container">Tạm tính</span>
                  <span>{selectedTotal.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between font-body-md">
                  <span className="text-on-secondary-container">Phí giao hàng</span>
                  <span>{shippingFee.toLocaleString()}đ</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between font-body-md">
                    <span className="text-on-secondary-container">Giảm giá</span>
                    <span className="text-green-600">-{discount.toLocaleString()}đ</span>
                  </div>
                )}
                <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between items-end">
                  <span className="font-bold text-body-lg text-on-surface">Tổng cộng</span>
                  <div className="text-right">
                    <p className="text-primary-container font-bold text-[28px] leading-none">{finalTotal.toLocaleString()}đ</p>
                    <p className="text-[12px] text-gray-500">(Đã bao gồm VAT)</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={selectedItems.length === 0}
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-button text-button shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">payments</span>
                Thanh toán
              </button>

              <div className="flex items-center justify-center gap-4 pt-2">
                <span className="material-symbols-outlined text-gray-400 text-xl" data-icon="verified_user">verified_user</span>
                <p className="text-[12px] text-gray-500">Thanh toán an toàn &amp; bảo mật</p>
              </div>
            </div>

            {selectedTotal < 20000 && (
              <div className="mt-4 bg-orange-50 dark:bg-orange-950 p-4 rounded-xl border border-orange-100 dark:border-orange-900 flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-600" data-icon="local_shipping">local_shipping</span>
                <p className="text-sm text-on-primary-container font-medium">
                  Mua thêm {(20000 - selectedTotal).toLocaleString()}đ để được <strong>Miễn phí vận chuyển</strong>!
                </p>
              </div>
            )}
          </aside>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <div className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="font-bold text-gray-700 dark:text-gray-300">minifood</span>
            <div className="flex gap-4 font-be-vietnam-pro text-xs text-gray-500 dark:text-gray-400">
              <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Support</a>
              <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Privacy Policy</a>
              <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Terms of Service</a>
              <a className="hover:text-gray-900 dark:hover:text-gray-100 transition-opacity duration-200 hover:opacity-80 inline-block py-1" href="#">Contact Kitchen</a>
            </div>
          </div>
          <p className="font-be-vietnam-pro text-xs text-gray-500 dark:text-gray-400">© 2026 minifood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;


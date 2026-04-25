import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';

const CheckoutForm = () => {
  const { cart, getTotal } = useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: '',
    address: '',
    time: 'Càng sớm càng tốt',
    payment: 'Tiền mặt (COD)',
    discountCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Checkout data:', formData, cart);
    setShowModal(true);
  };

  const subtotal = getTotal();
  const shipping = 15000;
  const discount = formData.discountCode.toLowerCase() === 'minifood10' ? 10000 : 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <Header currentPage="checkout" />

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Checkout Details */}
          <div className="lg:col-span-8 space-y-gutter">
            <h1 className="font-h2 text-h2 text-on-surface mb-8">Thanh toán</h1>

            {/* Thông tin nhận món */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">location_on</span>
                <h2 className="font-h3 text-h3">Thông tin nhận món</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-on-surface tracking-wider">Họ và tên</label>
                  <input
                    className="w-full border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all"
                    placeholder="Nguyễn Văn A"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-on-surface tracking-wider">Số điện thoại</label>
                  <input
                    className="w-full border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all"
                    placeholder="0901 234 567"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-on-surface tracking-wider">Bộ phận / Phòng ban</label>
                  <input
                    className="w-full border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all"
                    placeholder="Phòng Marketing"
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-on-surface tracking-wider">Địa chỉ nhận</label>
                  <input
                    className="w-full border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all"
                    placeholder="VD: 123 Nguyễn Huệ, Quận 1"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* Thời gian nhận */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">schedule</span>
                <h2 className="font-h3 text-h3">Thời gian nhận</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    value: 'Càng sớm càng tốt',
                    icon: 'bolt',
                    desc: 'Dự kiến: 15-25 phút',
                    badgeClass: 'bg-orange-100 text-orange-600'
                  },
                  {
                    value: 'Giờ nghỉ trưa',
                    icon: 'restaurant',
                    desc: 'Giao lúc 12:00 PM',
                    badgeClass: 'bg-blue-100 text-blue-600'
                  }
                ].map(time => (
                  <label key={time.value} className="flex-1 min-w-[200px] cursor-pointer group">
                    <input
                      className="hidden peer"
                      name="time"
                      type="radio"
                      checked={formData.time === time.value}
                      onChange={() => handleRadioChange('time', time.value)}
                    />
                    <div className="p-4 border border-gray-200 rounded-xl peer-checked:border-primary-container peer-checked:bg-primary-fixed/30 group-hover:bg-gray-50 transition-all flex items-center gap-4">
                      <div className={`${time.badgeClass} w-10 h-10 rounded-full flex items-center justify-center`}>
                        <span className="material-symbols-outlined">{time.icon}</span>
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{time.value}</p>
                        <p className="text-sm text-on-surface-variant">{time.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </section>

            {/* Phương thức thanh toán */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
              <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="material-symbols-outlined">payments</span>
                <h2 className="font-h3 text-h3">Phương thức thanh toán</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'Tiền mặt (COD)', icon: 'money', desc: 'Thanh toán khi nhận món' },
                  { value: 'Chuyển khoản', icon: 'account_balance', desc: 'QR Code qua ngân hàng' }
                ].map(payment => (
                  <label key={payment.value} className="cursor-pointer group">
                    <input
                      className="hidden peer"
                      name="payment"
                      type="radio"
                      checked={formData.payment === payment.value}
                      onChange={() => handleRadioChange('payment', payment.value)}
                    />
                    <div className="relative p-6 border border-gray-200 rounded-xl peer-checked:border-primary-container peer-checked:bg-primary-fixed/20 group-hover:shadow-md transition-all flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-3xl text-on-surface-variant peer-checked:text-primary">{payment.icon}</span>
                        <div>
                          <p className="font-bold text-on-surface">{payment.value}</p>
                          <p className="text-xs text-on-surface-variant">{payment.desc}</p>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-primary-container flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-container scale-0 peer-checked:scale-100 transition-transform"></div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-4 sticky top-28">
            <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col max-h-[calc(100vh-140px)]">
              <h2 className="font-h3 text-h3 mb-6">Đơn hàng của bạn</h2>

              {/* Items List */}
              <div className="flex-grow overflow-y-auto custom-scrollbar space-y-4 pr-2 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img className="w-16 h-16 rounded-lg object-cover" src={item.image} alt={item.name} />
                    <div className="flex-grow">
                      <p className="font-bold text-on-surface">{item.name}</p>
                      <p className="text-xs text-on-surface-variant">Số lượng: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-primary">{(item.price * item.quantity).toLocaleString()}đ</p>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="mb-6 flex gap-2">
                <input
                  className="flex-grow border-gray-200 rounded-lg focus:ring-primary-container text-sm"
                  placeholder="Mã giảm giá"
                  type="text"
                  name="discountCode"
                  value={formData.discountCode}
                  onChange={handleInputChange}
                />
                <button className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-sm hover:bg-gray-300 transition-colors">
                  Áp dụng
                </button>
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Tạm tính</span>
                  <span>{subtotal.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Phí vận chuyển</span>
                  <span>{shipping.toLocaleString()}đ</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-on-surface-variant text-green-600">
                    <span>Giảm giá</span>
                    <span>-{discount.toLocaleString()}đ</span>
                  </div>
                )}
                <div className="flex justify-between text-h3 font-h3 text-on-surface pt-2">
                  <span>Tổng cộng</span>
                  <span className="text-primary-container">{total.toLocaleString()}đ</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full mt-8 py-4 bg-orange-600 text-white rounded-xl font-button text-button shadow-lg shadow-orange-200 hover:bg-orange-700 active:scale-[0.98] transition-all"
              >
                Xác nhận đặt hàng
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 mt-auto bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 text-center md:text-left">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">minifood</span>
            <p className="mt-4 font-['Be_Vietnam_Pro'] text-sm leading-relaxed text-gray-500 dark:text-gray-400">© 2026 minifood. Năng lượng cho ngày làm việc.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a className="text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all" href="#">Về chúng tôi</a>
            <a className="text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all" href="#">Chính sách bảo mật</a>
            <a className="text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all" href="#">Điều khoản sử dụng</a>
            <a className="text-gray-500 dark:text-gray-400 hover:text-orange-500 hover:underline decoration-orange-500 underline-offset-4 transition-all" href="#">Liên hệ hỗ trợ</a>
          </div>
        </div>
      </footer>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 modal-overlay">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center transform animate-in fade-in zoom-in duration-300">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h2 className="text-2xl font-bold text-on-surface mb-2">Đặt hàng thành công!</h2>
            <p className="text-on-surface-variant mb-6">
              Mã đơn hàng của bạn là <span className="font-bold text-primary">#FOOD-1024</span>. Nhân viên minifood sẽ giao hàng cho bạn trong chốc lát.
            </p>
            <div className="space-y-3">
              <button className="w-full py-4 bg-primary-container text-white rounded-xl font-bold hover:brightness-110 transition-all">
                Xem đơn hàng
              </button>
              <button
                className="w-full py-4 bg-white border border-gray-200 text-on-surface-variant rounded-xl font-bold hover:bg-gray-50 transition-all"
                onClick={() => {
                  setShowModal(false);
                  navigate('/');
                }}
              >
                Tiếp tục chọn món
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;

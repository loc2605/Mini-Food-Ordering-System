import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = ({ currentPage = 'food' }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { label: 'Thực đơn', href: '/menu', active: currentPage === 'food' },
    { label: 'Giỏ hàng', href: '/cart', active: currentPage === 'cart' },
    { label: 'Thanh toán', href: '/checkout', active: currentPage === 'checkout' }
  ];

  const handleLogout = () => {
    setShowUserMenu(false);

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('currentOrder');

    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="text-2xl font-black text-orange-600"
          >
            minifood
          </button>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 border border-transparent focus-within:border-orange-600 transition-all">
            <span className="material-symbols-outlined text-gray-500 mr-2">
              search
            </span>

            <input
              className="bg-transparent border-none outline-none focus:ring-0 text-sm w-full placeholder:text-gray-500"
              placeholder="Tìm món ăn, đồ uống..."
              type="text"
            />
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm tracking-tight">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => navigate(item.href)}
              className={
                item.active
                  ? 'text-orange-600 font-bold border-b-2 border-orange-500 pb-1'
                  : 'text-gray-600 hover:text-orange-500 transition-colors duration-200'
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/cart')}
            className="relative active:scale-95 transition-transform p-2 hover:bg-orange-50 rounded-full"
          >
            <span className="material-symbols-outlined text-gray-600">
              shopping_cart
            </span>

            {cartQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {cartQuantity}
              </span>
            )}
          </button>

          <button
            type="button"
            className="active:scale-95 transition-transform p-2 hover:bg-orange-50 rounded-full"
          >
            <span className="material-symbols-outlined text-gray-600">
              notifications
            </span>
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowUserMenu((prev) => !prev)}
              className="flex items-center gap-2"
            >
              <img
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-orange-600 hover:opacity-80 transition-opacity"
                src={`https://ui-avatars.com/api/?name=${user?.username || 'Mini Food'}&background=F97316&color=fff`}
              />

              <span className="hidden md:block text-sm font-medium text-gray-700">
                {user?.username || 'Tài khoản'}
              </span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate('/profile');
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Hồ sơ cá nhân
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate('/orders');
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Đơn hàng của tôi
                </button>

                <hr className="my-1 border-gray-200" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
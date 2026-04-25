import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = ({ currentPage = 'home' }) => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    setShowUserMenu(false);
    navigate('/login');
  };

  const getNavItems = () => {
    switch (currentPage) {
      case 'checkout':
        return [
          { label: 'Thực đơn', href: '/', active: false },
          { label: 'Đơn hàng', href: '#', active: true },
          { label: 'Khuyến mãi', href: '#', active: false },
          { label: 'Cửa hàng', href: '#', active: false }
        ];
      default:
        return [
          { label: 'Tất cả', href: '#', active: currentPage === 'home' },
          { label: 'Cơm', href: '#', active: false },
          { label: 'Bún/Phở', href: '#', active: false },
          { label: 'Đồ uống', href: '#', active: false },
          { label: 'Ăn vặt', href: '#', active: false }
        ];
    }
  };

  const navItems = getNavItems();

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <span className="text-2xl font-black text-orange-600 dark:text-orange-500 font-h1 cursor-pointer" onClick={() => navigate('/')}>MiniFood</span>
          {currentPage !== 'checkout' && (
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96 border border-transparent focus-within:border-orange-600 transition-all">
              <span className="material-symbols-outlined text-gray-500 mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-500" placeholder="Tìm món ăn, đồ uống..." type="text" />
            </div>
          )}
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-sm tracking-tight">
          {navItems.map(item => (
            <a
              key={item.label}
              className={`${
                item.active
                  ? 'text-orange-600 font-bold border-b-2 border-orange-500 pb-1'
                  : 'text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors duration-200'
              }`}
              href={item.href}
              onClick={(e) => {
                if (item.href === '#') e.preventDefault();
                else navigate(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer active:scale-95 transform transition-transform p-2 hover:bg-orange-50 rounded-full" onClick={() => navigate('/cart')}>
            <span className="material-symbols-outlined text-gray-600">shopping_cart</span>
            {cartQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">{cartQuantity}</span>
            )}
          </div>
          <div className="cursor-pointer active:scale-95 transform transition-transform p-2 hover:bg-orange-50 rounded-full">
            <span className="material-symbols-outlined text-gray-600">notifications</span>
          </div>
          <div className="relative">
            <img
              alt="User avatar profile"
              className="w-10 h-10 rounded-full border-2 border-orange-600 cursor-pointer hover:opacity-80 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoJv-cafJpa551R2g1rmYCxt--XUt6Y_c5PWbYtxjrpHAdKXoVknYDKVwsL-Vouz6dUhkHXJEINSHdBAnj-aoyUtqQAHkyhlLysDFzzigy5d0M0WhTGw2NXwnysV466rz5-hc7JeJYjSt92hqOyteg-TZalYsLfPUlb14kSJgii-eBDS8eVGet2J6dak14f6Cex12PA2wxUcIO0bTNHRXKqHUkd3NRD5jo9xba1VES5sIAmchgxzDkR7KY39BhbuAouV51v-GrCw_1"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="#" onClick={() => navigate('/profile')}>Hồ sơ cá nhân</a>
                <a className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="#" onClick={() => navigate('/orders')}>Đơn hàng của tôi</a>
                <hr className="my-1 border-gray-200 dark:border-gray-600" />
                <a className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700" href="#" onClick={handleLogout}>Đăng xuất</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
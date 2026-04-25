import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Vui lòng nhập tên và mật khẩu.');
      return;
    }
    setError('');
    navigate('/');
  };

  return (
    <main className="h-screen overflow-hidden flex flex-col md:flex-row bg-surface font-body-md text-on-surface selection:bg-primary-container selection:text-white">
      <section className="hidden md:flex md:w-1/2 h-screen bg-orange-gradient p-8 lg:p-10 flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-orange-200/30 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
            <span className="text-2xl font-black tracking-tighter text-orange-600">minifood</span>
          </div>
          <h1 className="text-5xl font-black text-on-primary-fixed mb-4 leading-tight">Đặt món nhanh cho nhân viên</h1>
          <p className="text-lg text-on-primary-fixed-variant mb-8 max-w-xl">
            Đăng nhập để khám phá thực đơn hấp dẫn và nhận ưu đãi đặc biệt dành riêng cho bạn mỗi ngày.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-xl">bolt</span>
              </div>
              <span className="text-base font-medium text-on-surface-variant">Đặt món nhanh</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-xl">auto_awesome</span>
              </div>
              <span className="text-base font-medium text-on-surface-variant">Giao diện dễ dùng</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-xl">local_shipping</span>
              </div>
              <span className="text-base font-medium text-on-surface-variant">Theo dõi đơn hàng</span>
            </li>
          </ul>
        </div>
        <div className="relative z-10 mt-10 flex justify-center">
          <img
            alt="Food Illustration"
            className="w-full max-w-[28rem] max-h-[52vh] rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhhnE_OgMwbSNwjgLCYI9gfKlcJVTM_TWRA2jvYr1WdGR2Om7Os8hw42WeCZjEdY-KdlT6j-HYPAowU5eWvtbIh2flxwD4sPd8xVIhbFZvGoUBntsHHL5MeV_B9JOXCW_rD3EHfrnB0XHb62qpJ9XNGcOx6OT_YvwyWV7J6C8011UgoUaPbPNsuaDqUQFiHZ5Dq1pHaBm147ePuzAeCpMqOVAys7Lv2FLUQY62uNNUdFz26RlVZ0IEWIB0K7MNERZ5D_BYFABSIPn-"
          />
        </div>
      </section>
      <section className="w-full md:w-1/2 h-screen flex items-center justify-center p-6 md:p-10 bg-surface-container-lowest">
        <div className="w-full max-w-md h-full flex flex-col justify-center">
          <div className="md:hidden flex items-center justify-center gap-2 mb-8">
            <span className="material-symbols-outlined text-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
            <span className="text-xl font-black tracking-tighter text-orange-600">minifood</span>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-black text-on-surface mb-2">Chào mừng trở lại</h2>
              <p className="text-on-surface-variant">Vui lòng nhập thông tin để tiếp tục</p>
              {error && <p className="mt-3 text-sm text-error">{error}</p>}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface">Email hoặc Tên đăng nhập</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-secondary-container">person</span>
                  <input
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all bg-white text-on-surface"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="john.doe@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface">Mật khẩu</label>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-secondary-container">lock</span>
                  <input
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all bg-white text-on-surface"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-secondary-container hover:text-primary-container transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-on-surface-variant">
                  <input className="w-4 h-4 rounded border-outline-variant text-primary-container focus:ring-primary-container" type="checkbox" />
                  Ghi nhớ
                </label>
                <a className="text-sm font-semibold text-primary-container hover:underline" href="#">Quên mật khẩu?</a>
              </div>
              <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-all active:scale-[0.98]" type="submit">
                Đăng nhập
              </button>
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-xs font-medium text-gray-400 uppercase">Hoặc</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-white border border-outline-variant text-on-surface py-3 rounded-xl font-semibold hover:bg-surface-container-low transition-all active:scale-[0.98]" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Đăng nhập với Google
              </button>
            </form>
          </div>
          <div className="mt-8 text-center">
            <p className="text-on-surface-variant font-body-md">
              Chưa có tài khoản?
              <a className="font-bold text-primary-container hover:underline ml-1" href="/register">Đăng ký ngay</a>
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-on-surface-variant/60">© 2026 minifood. Năng lượng cho ngày làm việc.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;

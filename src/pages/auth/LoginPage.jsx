import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

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
              <div className="text-center md:text-left mb-8">
                <h2 className="text-3xl font-black text-on-surface mb-2">Chào mừng trở lại</h2>
                <p className="text-on-surface-variant">Vui lòng nhập thông tin để tiếp tục</p>
              </div>
              <LoginForm />
            </div>
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

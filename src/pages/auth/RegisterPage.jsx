import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen overflow-hidden flex items-center justify-center p-4 lg:p-10 bg-mesh text-on-background font-body-md selection:bg-primary-container selection:text-white">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 h-screen items-center">
        <div className="hidden lg:flex flex-col justify-center space-y-8 pr-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-orange-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
              <span className="text-3xl font-black tracking-tighter text-orange-600">minifood</span>
            </div>
            <h1 className="text-5xl font-black leading-tight text-on-background">
              Tạo tài khoản để <br />
              <span className="text-orange-600">bắt đầu đặt món</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Trải nghiệm giải pháp quản lý và đặt món ăn văn phòng nhanh chóng, tiện lợi và hiện đại nhất.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <span className="material-symbols-outlined text-orange-600">bolt</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-on-background">Đặt món thần tốc</h3>
                <p className="text-base text-gray-600">Chỉ với vài thao tác, bữa trưa nóng hổi sẽ sẵn sàng cho bạn.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <span className="material-symbols-outlined text-orange-600">verified_user</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-on-background">Quản lý chuyên nghiệp</h3>
                <p className="text-base text-gray-600">Theo dõi đơn hàng và ngân sách chi tiêu minh bạch cho doanh nghiệp.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <span className="material-symbols-outlined text-orange-600">card_giftcard</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-on-background">Ưu đãi độc quyền</h3>
                <p className="text-base text-gray-600">Nhận ngay mã giảm giá và tích điểm cho mỗi đơn hàng thành công.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-full">
          <div className="w-full max-w-[480px] h-full bg-white rounded-[24px] p-8 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-center">
            <div className="mb-8 lg:mb-10">
              <div className="lg:hidden flex items-center space-x-3 mb-6">
                <span className="material-symbols-outlined text-orange-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
                <span className="text-2xl font-black tracking-tighter text-orange-600">minifood</span>
              </div>
              <h2 className="text-3xl font-bold text-on-background">Đăng ký tài khoản</h2>
              <p className="text-base text-gray-600">Nhập thông tin cá nhân của bạn để tiếp tục</p>
            </div>
            <RegisterForm />
            <div className="text-center pt-4">
              <p className="text-base text-gray-600">
                Đã có tài khoản? <a className="text-orange-600 font-bold hover:underline" href="/login">Đăng nhập ngay</a>
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">© 2026 minifood. Năng lượng cho ngày làm việc.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;


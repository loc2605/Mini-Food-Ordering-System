import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'employee',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu không khớp.');
      return;
    }
    if (!formData.terms) {
      setError('Vui lòng chấp nhận điều khoản dịch vụ.');
      return;
    }
    setError('');
    navigate('/');
  };

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
              {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-on-background">Họ và tên</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">person</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-background">Email</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                    placeholder="example@minifood.vn"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-background">Số điện thoại</label>
                  <input
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                    placeholder="0901234567"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-on-background">Vai trò</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="cursor-pointer">
                    <input className="hidden peer" name="role" type="radio" value="employee" checked={formData.role === 'employee'} onChange={handleChange} />
                    <div className="flex items-center justify-center py-3 border border-gray-200 rounded-2xl text-base peer-checked:border-orange-600 peer-checked:bg-orange-50 peer-checked:text-orange-600 transition-all">
                      Nhân viên
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="hidden peer" name="role" type="radio" value="admin" checked={formData.role === 'admin'} onChange={handleChange} />
                    <div className="flex items-center justify-center py-3 border border-gray-200 rounded-2xl text-base peer-checked:border-orange-600 peer-checked:bg-orange-50 peer-checked:text-orange-600 transition-all">
                      Quản trị viên
                    </div>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-on-background">Mật khẩu</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">lock</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                    placeholder="••••••••"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-on-background">Xác nhận mật khẩu</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">lock_reset</span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-all"
                    placeholder="••••••••"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input 
                  className="mt-1 rounded text-orange-600 focus:ring-orange-600 border-gray-300" 
                  id="terms" 
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                <label className="text-sm text-gray-600" htmlFor="terms">
                  Tôi đồng ý với <a className="text-orange-600 hover:underline" href="#">Điều khoản sử dụng</a> và <a className="text-orange-600 hover:underline" href="#">Chính sách bảo mật</a> của minifood.
                </label>
              </div>
              <button className="w-full bg-orange-600 text-white py-4 rounded-2xl font-semibold text-base shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all active:scale-[0.98] mt-3" type="submit">
                Tạo tài khoản
              </button>
              <div className="text-center pt-4">
                <p className="text-base text-gray-600">
                  Đã có tài khoản? <a className="text-orange-600 font-bold hover:underline" href="/login">Đăng nhập ngay</a>
                </p>
              </div>
            </form>
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


import { useState } from 'react';
import { registerUser } from '../../services/authService';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Vui lòng nhập tên đăng nhập';
    if (!formData.password) newErrors.password = 'Vui lòng nhập mật khẩu';
    else if (formData.password.length < 8) newErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
    if (!formData.fullName.trim()) newErrors.fullName = 'Vui lòng nhập họ và tên';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setErrors({});
    setSuccessMessage('');

    try {
      const response = await registerUser(formData);

      if (response.success) {
        setSuccessMessage('Đăng ký thành công!');
        setFormData({ username: '', password: '', fullName: '' });
      } else {
        const fieldErrors = {};
        response.errors?.forEach(err => {
          fieldErrors[err.field] = err.message;
        });
        setErrors(fieldErrors);
      }
    } catch (error) {
      setErrors({ global: 'Có lỗi xảy ra. Vui lòng thử lại sau.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {successMessage && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      {errors.global && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          {errors.global}
        </div>
      )}

      {/* Username */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tên đăng nhập
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
            errors.username ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Nhập tên đăng nhập"
        />
        {errors.username && (
          <p className="mt-1 text-sm text-red-600">{errors.username}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mật khẩu
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Nhập mật khẩu"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Họ và tên
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
            errors.fullName ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Nhập họ và tên"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>
    </form>
  );
};

export default RegisterForm;
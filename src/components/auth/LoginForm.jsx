import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name] || errors.global) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
        global: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Vui lòng nhập tên đăng nhập';
    }

    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự';
    }

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

    try {
      const response = await loginUser(formData);

      if (response.success) {
        const { userId, username, role, token } = response.data;

        localStorage.setItem('token', token);

        localStorage.setItem(
          'user',
          JSON.stringify({
            userId,
            username,
            role
          })
        );

        navigate('/menu');
      } else {
        const fieldErrors = {};

        response.errors?.forEach((err) => {
          fieldErrors[err.field] = err.message;
        });

        setErrors({
          ...fieldErrors,
          global:
            response.message ||
            'Sai tài khoản hoặc mật khẩu'
        });
      }
    } catch (error) {
      setErrors({
        global: 'Hệ thống đang lỗi, vui lòng thử lại'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.global && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg">
          {errors.global}
        </div>
      )}

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
          <p className="mt-1 text-sm text-red-600">
            {errors.username}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mật khẩu
        </label>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Nhập mật khẩu"
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <span className="material-symbols-outlined text-lg">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        </div>

        {errors.password && (
          <p className="mt-1 text-sm text-red-600">
            {errors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </button>
    </form>
  );
};

export default LoginForm;
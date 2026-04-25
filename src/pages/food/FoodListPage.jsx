import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import FoodGrid from '../../components/food/FoodGrid';
import SearchBar from '../../components/food/SearchBar';
import getFoods from '../../services/foodService';
import { useCart } from '../../context/CartContext';

const FoodListPage = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getFoods();
        if (response.success) {
          setFoods(response.data);
          setFilteredFoods(response.data);
        } else {
          setError(response.message || 'Không thể tải danh sách món ăn.');
        }
      } catch (err) {
        setError('Không thể tải danh sách món ăn. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    const filtered = foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  }, [searchTerm, foods]);

  const handleCartClick = () => {
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-body-md text-on-surface">
        <Header currentPage="food" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Đang tải thực đơn...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background font-body-md text-on-surface">
        <Header currentPage="food" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700"
            >
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <Header currentPage="food" />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thực đơn hôm nay</h1>
          <p className="text-gray-600">Chọn món yêu thích và thêm vào giỏ hàng</p>
        </div>
        {filteredFoods.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Không tìm thấy món ăn nào.</p>
          </div>
        ) : (
          <FoodGrid foods={filteredFoods} />
        )}
      </div>
    </div>
  );
};

export default FoodListPage;

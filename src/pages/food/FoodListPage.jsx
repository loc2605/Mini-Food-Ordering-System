import Header from '../../components/layout/Header';
import FoodCard from '../../components/food/FoodCard';
import { mockFoods } from '../../data/mockFoods';

const FoodListPage = () => {
  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface">
      <Header currentPage="food" />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Danh sách món ăn</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockFoods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodListPage;

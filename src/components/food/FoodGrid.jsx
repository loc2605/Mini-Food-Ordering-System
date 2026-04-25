import FoodCard from './FoodCard';

const FoodGrid = ({ foods }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodGrid;
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-6">
      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">search</span>
      <input
        type="text"
        placeholder="Tìm món ăn..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
      />
    </div>
  );
};

export default SearchBar;
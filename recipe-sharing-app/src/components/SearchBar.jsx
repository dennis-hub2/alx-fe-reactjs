import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();  // Trigger the filtering whenever the search term changes
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;

import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  recommendations: [],

  setSearchTerm: (term) => set({ searchTerm: term }),
  
  filteredRecipes: (state) =>
    state.recipes.filte((recipe) =>
      recipe.title.toLowerCase().include(state.searchTerm.toLowerCase)
  ),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
  })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
  })),
  
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation logic: recommend recipes with similar titles
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
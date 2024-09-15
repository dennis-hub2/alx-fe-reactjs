import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [errors, setErrors] = useState({}); // State for tracking errors

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Recipe title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split("\n").length < 2) newErrors.ingredients = "At least two ingredients are required";
    if (!preparation) newErrors.preparation = "Preparation steps are required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation
    const validationErrors = validate();
    setErrors(validationErrors);

    // Stop submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // If validation passes, handle form submission
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"), // Split by newline to create an array
      preparation,
    };

    console.log("Submitted Recipe:", newRecipe);

    // Clear the form fields
    setTitle("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? "border-red-500" : ""
              }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? "border-red-500" : ""
              }`}
            placeholder="Enter ingredients (one per line)"
            rows="4"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preparation">
            Preparation Steps
          </label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.preparation ? "border-red-500" : ""
              }`}
            placeholder="Enter preparation steps"
            rows="6"
          ></textarea>
          {errors.preparation && <p className="text-red-500 text-xs italic">{errors.preparation}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

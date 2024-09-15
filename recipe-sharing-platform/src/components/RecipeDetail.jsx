import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-6" />
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;

import React, { useEffect, useState } from "react";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=12`
      );
      const data = await response.json();
      console.log(data);
      setRecipes(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="container">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt="" />
          <p> {recipe.title}</p>
          <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        </div>
      ))}
    </div>
  );
};

export default Home;

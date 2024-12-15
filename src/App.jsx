import { useState } from "react";
import css from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContext";
import { Recipe } from "./components/Recipe/Recipe";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  // const { name, ingredients, description, img } = selectedRecipe;
  // const { name, ingredients, description, img } = selectedRecipe;
  // const { name, ingredients, description, img } = selectedRecipe;

  return (
    <>
      <RecipeContext.Provider value={selectedRecipe}>
        <div className={css.container}>
          <List
            recipes={recipes}
            onSelectRecipe={(id) => setSelectedRecipeId(id)}
          />
          <Cookbook
            selectedRecipe={selectedRecipe}
            title={"Książka kucharska"}
          />
        </div>
      </RecipeContext.Provider>
      <RecipeContext.Provider value={recipes[3]}>
        <div className={css.promoted}>
          <h2>Przepis tygodnia:</h2>
          <Recipe />
        </div>
      </RecipeContext.Provider>
    </>
  );
}

export default App;
